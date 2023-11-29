function recursionBinarySearch(
  orderedList: number[],
  start: number,
  end: number,
  target: number
): [number, number] {
  const middle = Math.floor((start + end) / 2);
  const value = orderedList[middle];
  // caso base
  if (target === value) return [middle, orderedList[middle]];
  if (target > value) start = middle + 1;
  else end = middle - 1;
  // caso recursion
  return recursionBinarySearch(orderedList, start, end, target);
}

const orderedList: number[] = [2, 4, 6, 8, 10];
const target = 6;
const start = 0;
const end = orderedList.length - 1;
const [key, number] = recursionBinarySearch(orderedList, start, end, target);

console.log("Index:", key, "Value:", number, "Target:", target);
