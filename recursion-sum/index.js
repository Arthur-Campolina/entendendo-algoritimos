var sum = 0;
var index = 0;
function recursionSum(array) {
    sum += array[0];
    array.shift();
    index++;
    // caso base
    if (array.length === 0)
        return sum;
    // caso recursivo
    return recursionSum(array);
}
var arr = [5, 4, 1];
var value = recursionSum(arr);
console.log("Total:", value);
