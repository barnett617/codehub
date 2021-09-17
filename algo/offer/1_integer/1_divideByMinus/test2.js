const HALF_MINIST_INTEGER = {
  CODE: 0x80000000,
  VAL: -Math.pow(2, 31)
}

function divide(dividend, divisor) {
  // 1.正数转负整
  let negative = 2;
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
  // 3.符号判断
  return negative === 1 ? -result : result;

  function divideCore(dividend, divisor) {
    // 1.记录结果
    let result = 0;
    // 2.终止条件：被除数小于除数，因为二者都是负数
    while (dividend <= divisor) {
      // 3.记录本次可减去的最大值
      let value = divisor;
      // 4.记录本次的商值
      let quotient = 1;
      // 5.计算本次可减去的最大值
      while (dividend <= value + value) {
        quotient += quotient;
        value += value;
      }
      // 6.记录结果
      result += quotient;
      // 7.被除数减去本轮最大除数
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