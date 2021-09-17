function divide(dividend, divisor) {
  let negative = 2;
  if (dividend > 0) {
    negative--;
    dividend = -dividend;
  }
  if (divisor > 0) {
    negative--;
    divisor = -divisor;
  }
  let result = divideCore(dividend, divisor);
  return negative === 1 ? -result : result;
  function divideCore(dividend, divisor) {
    let result = 0;
    while (dividend <= divisor) {
      let value = divisor;
      let quotient = 1;
      while (dividend <= value + value) {
        quotient += quotient;
        value += value;
      }
      result += quotient;
      dividend -= value;
    }

    return result;
  }
}

console.time('judge');
(function () {
  // 最小负数转正数会溢出
  const testcase = [
    { a: 15, b: 2 },
    { a: 7, b: -3 },
    { a: 0, b: 1 },
    { a: 1, b: 1 },
    { a: -Math.pow(2, 31), b: 1 },
    { a: -Math.pow(2, 31), b: -1 },
  ]
  const result = [];
  testcase.forEach(test => {
    const { a, b } = test;
    result.push({
      input: test,
      output: divide(a, b)
    })
  })
  console.table(result);
})()
console.timeEnd('judge');