import * as implementations from "./implementations";

let sorters = [
  new implementations.DefaultSorter(),
  new implementations.BubbleSorter(),
  new implementations.QuickSorter(),
  new implementations.BogoSorterTimeFileDumper(),
];

for (const sorter of sorters) {
  // create a shuffled array of a million items
  let array = sorter.shuffle(
    Array(1000000)
      .fill(null)
      .map((_, i) => i)
  );
  try {
    let result = sorter.timed_sort(array);
    console.log(
      result.milliseconds +
        " milliseconds to sort the 1.000.000 length array using sorter " +
        sorter.constructor.name
    );
  } catch (e) {
    console.log("methods not implemented for " + sorter.constructor.name);
  }
}
