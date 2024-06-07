function printFirstTenOddNumbers() {
  let count = 0;
  let number = 1;

  while (count < 10) {
    if (number % 2 !== 0) {
      console.log(number);
      count++;
    }
    number++;
  }
}

printFirstTenOddNumbers();
