var counter = 0;
function recursionCount(arr) {
    // caso base
    if (!arr.length)
        return counter;
    counter++;
    arr.shift();
    // caso recursivo
    return recursionCount(arr);
}
var numbers = [5, 4, 1, 25, 2, 0];
var quantity = recursionCount(numbers);
console.log("Total:", quantity);
