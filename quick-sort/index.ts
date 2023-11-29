function quickSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  const lowerArray = arr.filter((number) => number < pivot);
  const greaterArray = arr.filter((number) => number > pivot);
  return [...quickSort(lowerArray), pivot, ...quickSort(greaterArray)];
}

const quickSortArray = [33, 5, 12, 14, 7];
const result = quickSort(quickSortArray);
console.log("Quick Sort:", result);
