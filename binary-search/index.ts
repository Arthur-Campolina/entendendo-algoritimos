function binarySearch(list: number[], number: number): void {
  let iterationCounter = 0;
  let listStart = 0;
  let listEnd = list.length - 1;

  while (listStart <= listEnd) {
    const middle = Math.floor((listStart + listEnd) / 2);
    const guess = list[middle];

    if (guess === number) {
      console.log("Index:", middle, "Value:", list[middle]);
      console.log("Iterations:", iterationCounter);
      iterationCounter++;
      return;
    }
    if (guess > number) {
      listEnd = middle - 1;
      iterationCounter++;
    } else {
      listStart = middle + 1;
      iterationCounter++;
    }
  }

  console.log("Index:", "None");
  console.log("Iterations:", iterationCounter);
  return;
}

const list = [1, 3, 5, 7, 9];

binarySearch(list, -1);
