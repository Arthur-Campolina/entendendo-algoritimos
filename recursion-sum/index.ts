let sum = 0;
let index = 0;

function recursionSum(array: number[]): number {
  sum += array[0];
  array.shift();
  index++;
  // caso base
  if (array.length === 0) return sum;
  // caso recursivo
  return recursionSum(array);
}

const arr: number[] = [5, 4, 1];
const value = recursionSum(arr);
console.log("Total:", value);
