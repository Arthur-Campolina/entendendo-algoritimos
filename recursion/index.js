function recursion(number) {
    if (number > 0) {
        console.log(number, "...");
        number--;
        recursion(number);
    }
}
recursion(3);
