function recursion(number: number) {
  // caso recursivo
  if (number > 0) {
    console.log(number, "...");
    number--;
    recursion(number);
    // caso base
  } else {
    return;
  }
}

recursion(3);
