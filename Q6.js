

function curry(a) {
  return function (b) {
    return a + b;
  };
}

console.log(curry(5)(5));