function recursionBinarySearch(orderedList, start, end, target) {
    var middle = Math.floor((start + end) / 2);
    var value = orderedList[middle];
    // caso base
    if (target === value)
        return [middle, orderedList[middle]];
    if (target > value)
        start = middle + 1;
    else
        end = middle - 1;
    // caso recursion
    return recursionBinarySearch(orderedList, start, end, target);
}
var orderedList = [2, 4, 6, 8, 10];
var target = 6;
var start = 0;
var end = orderedList.length - 1;
var _a = recursionBinarySearch(orderedList, start, end, target), key = _a[0], number = _a[1];
console.log("Index:", key, "Value:", number, "Target:", target);
