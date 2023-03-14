import { error, fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { database } from "$lib/database";
import { streams } from "./+server";

export const load: PageServerLoad = async ({ params, locals }) => {

  /* Find the correct chat */
  const chat = await database.chat.findUniqueOrThrow({
    where: { id: Number(params.chat) },
    include: {
      messages: { include: { author: true } },
    },
  });
  /* Find the user who sen the message */
  const user = await database.user.findUniqueOrThrow({
    where: { session: locals.session },
  });

  /* set boolean own to true for all messages in the chat which the current user wrote */
  chat.messages.forEach((e) => (e.own = e.authorId == user.id));

  return { chat };
};

export const actions: Actions = {
  write: async ({ request, params, locals }) => {
    const form = await request.formData();
    const message = form.get("message")?.toString();
    if (!message) {
      return fail(400, { error: "missing message" });
    }

    // what chat are we writing to ?
    const chat = await database.chat.findUnique({
      where: { id: Number(params.chat) },
    });

    // what user is writing?
    const user = await database.user.findUnique({
      where: { session: locals.session },
    });

    // create the message in the database
    const msg = await database.message.create({
      data: { authorId: user?.id, chatId: chat?.id, content: message },
      include: { author: { select: { username: true, id: true } } },
    });

    // send the message to all connected clients.
    for (const session in streams) {
      /* send messages to all other streams exept own for this chat */
      const connection = streams[session];
      if (connection.chat == params.chat && session != locals.session) {
        /* enqueue messages to all streams for this chat */
        connection.controller.enqueue(JSON.stringify(msg));
        
      }
    }
  },
};
