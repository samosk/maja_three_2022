<script lang="ts">
    import { enhance } from "$app/forms";

    // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
</script>

<h1 class="text-5xl font-bold">Welcome</h1>

<div>
    <div
        class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
        <h2>Products</h2>

        <div
            class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
            <!-- svelte-ignore a11y-invalid-attribute -->
            <div>
                <a href="" class="group">
                    <div
                        class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
                    >
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 class="mt-4 text-sm">Earthen Bottle</h3>
                </a>
                <button class="btn btn-outline">
                    <p class="mt-1 text-lg font-medium">$48</p>
                </button>
            </div>

            <!-- svelte-ignore a11y-invalid-attribute -->
            <div>
                <a href="#" class="group">
                    <div
                        class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
                    >
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                            alt="Olive drab green insulated bottle with flared screw lid and flat top."
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 class="mt-4 text-sm">Nomad Tumbler</h3>
                </a>
                <button class="btn btn-outline">
                    <p class="mt-1 text-lg font-medium">$35</p>
                </button>
            </div>

            <!-- svelte-ignore a11y-invalid-attribute -->
            <div>
                <a href="#" class="group">
                    <div
                        class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
                    >
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                            alt="Person using a pen to cross a task off a productivity paper card."
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 class="mt-4 text-sm">Focus Paper Refill</h3>
                </a>
                <button class="btn btn-outline">
                    <p class="mt-1 text-lg font-medium">$89</p>
                </button>
            </div>

            <!-- svelte-ignore a11y-invalid-attribute -->
            <div>
                <a href="#" class="group">
                    <div
                        class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
                    >
                        <!-- <img
                            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                            alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        /> -->
                        <img
                            src="https://i.redd.it/zkztbhh2dot81.jpg"
                            alt="Golden Order Greatsword"
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 class="mt-4 text-sm">Golden Order Greatsword</h3>
                </a>
                <button class="btn btn-outline">
                    <p class="mt-1 text-lg font-medium">35</p>
                    <img
                        src="https://eldenring.wiki.fextralife.com/file/Elden-Ring/item_value_icon_elden_ring_wiki_guide_18px.png"
                        alt=""
                        class="text"
                    />
                </button>
            </div>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <div>
                <a href="" class="group">
                    <div
                        class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
                    >
                        <!-- <img
                            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        /> -->
                        <img
                            src="https://preview.redd.it/8vqx625jz2m91.jpg?width=640&crop=smart&auto=webp&s=93d3eebfd3d976a40370251b1aa42f2cf44b1777"
                            alt="Eclipse Shotel"
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 class="mt-4 text-sm">Eclipse Shotel</h3>
                </a>
                <button class="btn btn-outline">
                    <p class="mt-1 text-lg font-medium">72 thousand dabloons</p>
                    <img
                        src="https://eldenring.wiki.fextralife.com/file/Elden-Ring/item_value_icon_elden_ring_wiki_guide_18px.png"
                        alt=""
                        class="text"
                    />
                </button>
            </div>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <div>
                <a href="" class="group">
                    <div
                        class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
                    >
                        <!-- <img
                            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        /> -->
                        <img
                            src="https://i0.wp.com/selphie1999gaming.com/wp-content/uploads/2022/03/Elden-Ring-Legendary-Armaments-G-93202222222-3-2.jpg?resize=577%2C345&ssl=1"
                            alt="Bolt of Gransax"
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 class="mt-4 text-sm">Bolt of Gransax</h3>
                </a>
                <button class="btn btn-outline">
                    <p class="mt-1 text-lg font-medium">48</p>
                    <img
                        src="https://eldenring.wiki.fextralife.com/file/Elden-Ring/item_value_icon_elden_ring_wiki_guide_18px.png"
                        alt=""
                        class="text"
                    />
                </button>
            </div>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <div>
                <a href="#" class="group">
                    <div
                        class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
                    >
                        <!-- <img
                            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                            alt="Olive drab green insulated bottle with flared screw lid and flat top."
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        /> -->
                        <img
                            src="https://ftw.usatoday.com/wp-content/uploads/sites/90/2022/03/elden-ring-dark-moon-greatsword.png"
                            alt="Dark Moon Greatsword"
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 class="mt-4 text-sm">Dark Moon Greatsword</h3>
                </a>
                <button class="btn btn-outline">
                    <p class="mt-1 text-lg font-medium">350</p>
                    <img
                        src="https://eldenring.wiki.fextralife.com/file/Elden-Ring/item_value_icon_elden_ring_wiki_guide_18px.png"
                        alt=""
                        class="text"
                    />
                </button>
            </div>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <div>
                <a href="" class="group">
                    <div
                        class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
                    >
                        <!-- <img
                            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        /> -->
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 class="mt-4 text-sm">Marais Executioner's Sword</h3>
                </a>
                <button class="btn btn-outline">
                    <p class="mt-1 text-lg font-medium">48</p>
                    <img
                        src="https://eldenring.wiki.fextralife.com/file/Elden-Ring/item_value_icon_elden_ring_wiki_guide_18px.png"
                        alt=""
                        class="text"
                    />
                </button>
            </div>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <div>
                <a href="#" class="group">
                    <div
                        class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
                    >
                        <!-- <img
                            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                            alt="Olive drab green insulated bottle with flared screw lid and flat top."
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        /> -->
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="Ruins Greatsword"
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 class="mt-4 text-sm">Ruins Greatsword</h3>
                </a>
                <button class="btn btn-outline">
                    <p class="mt-1 text-lg font-medium">70</p>
                    <img
                        src="https://eldenring.wiki.fextralife.com/file/Elden-Ring/item_value_icon_elden_ring_wiki_guide_18px.png"
                        alt=""
                        class="text"
                    />
                </button>
            </div>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <div>
                <a href="" class="group">
                    <div
                        class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
                    >
                        <!-- <img
                            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        /> -->
                        <img
                            src="https://cdn.shopify.com/s/files/1/0336/2894/6571/products/EldenRIng_SwordofNightandFlame5_985x700.jpg?v=1650406392"
                            alt="Sword of Night and Flame"
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 class="mt-4 text-sm">Sword of Night and Flame</h3>
                </a>
                <button class="btn btn-outline">
                    <p class="mt-1 text-lg font-medium">48</p>
                    <img
                        src="https://eldenring.wiki.fextralife.com/file/Elden-Ring/item_value_icon_elden_ring_wiki_guide_18px.png"
                        alt=""
                        class="text"
                    />
                </button>
            </div>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <div>
                <a href="" class="group">
                    <div
                        class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
                    >
                        <!-- <img
                            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        /> -->
                        <img
                            src="https://cdnb.artstation.com/p/assets/images/images/050/774/775/large/oleksandr-yavorskyi-4.jpg?1655671346"
                            alt="Grafted blade Greatsword"
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 class="mt-4 text-sm">Grafted Blade Greatsword</h3>
                </a>
                <button class="btn btn-outline">
                    <p class="mt-1 text-lg font-medium">48</p>
                    <img
                        src="https://eldenring.wiki.fextralife.com/file/Elden-Ring/item_value_icon_elden_ring_wiki_guide_18px.png"
                        alt=""
                        class="text"
                    />
                </button>
            </div>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <div>
                <a href="" class="group">
                    <div
                        class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
                    >
                        <!-- <img
                            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        /> -->
                        <img
                            src="https://gameannaijo.com/wp-content/uploads/2022/03/a8cb075937f86895c402d1f4fd106a81.jpg"
                            alt="Devourer Scepter"
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 class="mt-4 text-sm">Devourer's Scepter</h3>
                </a>
                <button class="btn btn-outline">
                    <p class="mt-1 text-lg font-medium">48</p>
                    <img
                        src="https://eldenring.wiki.fextralife.com/file/Elden-Ring/item_value_icon_elden_ring_wiki_guide_18px.png"
                        alt=""
                        class="text"
                    />
                </button>
            </div>

            <!-- More products... -->
        </div>
    </div>
</div>
