function binarySearch(list, number) {
    var iterationCounter = 0;
    var listStart = 0;
    var listEnd = list.length - 1;
    while (listStart <= listEnd) {
        var middle = Math.floor((listStart + listEnd) / 2);
        var guess = list[middle];
        if (guess === number) {
            console.log("Index:", middle, "Value:", list[middle]);
            console.log("Iterations:", iterationCounter);
            iterationCounter++;
            return;
        }
        if (guess > number) {
            listEnd = middle - 1;
            iterationCounter++;
        }
        else {
            listStart = middle + 1;
            iterationCounter++;
        }
    }
    console.log("Index:", "None");
    console.log("Iterations:", iterationCounter);
    return;
}
var list = [1, 3, 5, 7, 9];
binarySearch(list, -1);
