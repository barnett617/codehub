function divide(dividend, divisor) {
  // 0.记录正负数
  let negative = 2;
  // 1.正数转负数
  if (dividend > 0) {
    negative--;
    dividend = -dividend;
  }
  if (divisor > 0) {
    negative--;
    divisor = -divisor;
  }
  // 2.计算
  let result = divideCore(dividend, divisor);
  return negative === 1 ? -result : result;
  // 3.结果计算
  function divideCore(dividend, divisor) {
    // 1.记录结果
    let result = 0;
    // 2.终止条件
    while (dividend <= divisor) {
      // 3.中间变量
      let value = divisor;
      // 4.中间商值
      let quotient = 1;
      // 5.本次可减最大值
      while (dividend <= value + value) {
        quotient += quotient;
        value += value;
      }
      // 6.记录结果
      result += quotient;
      // 7.被除数减去本轮可减最大值
      dividend -= value;
    }
    // 8.返回结果
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