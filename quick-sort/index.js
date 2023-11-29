var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function quickSort(arr) {
    if (arr.length < 2)
        return arr;
    var pivot = arr[0];
    var lowerArray = arr.filter(function (number) { return number < pivot; });
    var greaterArray = arr.filter(function (number) { return number > pivot; });
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(lowerArray), true), [pivot], false), quickSort(greaterArray), true);
}
var quickSortArray = [33, 5, 12, 14, 7];
var result = quickSort(quickSortArray);
console.log("Quick Sort:", result);
