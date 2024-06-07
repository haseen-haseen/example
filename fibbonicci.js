function fibonacci(n) {
  let fibSeq = [0, 1];

  for (let i = 2; i < n; i++) {
    fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
  }

  return fibSeq;
}

const fibSequence = fibonacci(10);
console.log("Fibonacci Sequence:", fibSequence);
