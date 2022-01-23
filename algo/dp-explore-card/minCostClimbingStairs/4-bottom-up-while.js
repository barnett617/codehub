var fib = function(x) {
  let a = 0;
  let b = 1;
  if (x === a) return a;
  if (x === b) return b;
  let ans = 0;
  let i = 2;
  while (i !== (x + 1)) {
    ans = a + b;
    a = b;
    b = ans;
    i = i + 1;
  }
  return ans;
}

// 0 1 2 3 4 5 6 7  8  9  10
// 0 1 1 2 3 5 8 13 21 34 55
console.log(fib(10));