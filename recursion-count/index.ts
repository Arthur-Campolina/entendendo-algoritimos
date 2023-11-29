let counter = 0;

function recursionCount(arr: number[]): number {
  // caso base
  if (!arr.length) return counter;
  counter++;
  arr.shift();
  // caso recursivo
  return recursionCount(arr);
}

const numbers: number[] = [5, 4, 1, 25, 2, 0];
const quantity = recursionCount(numbers);
console.log("Total:", quantity);
