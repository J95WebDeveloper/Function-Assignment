function factorial(n) {
  if (n < 0) return -1;
  else if (n == 0) return 1;
  else {
    fact = 1;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }
}

let f = factorial(7);
console.log(f);
