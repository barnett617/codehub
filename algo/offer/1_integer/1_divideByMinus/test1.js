const MINIST_INTEGER = {
  CODE: 0x80000000,
  VAL: -Math.pow(2, 31)
}

const HALF_MINIST_INTEGER = {
  CODE: 0xc0000000,
  VAL: -Math.pow(2, 30)
}

function divide(dividend, divisor) {
  // js不区分整型和浮点型
  // if (dividend == MINIST_INTEGER.VAL && divisor === -1) {
  //   return Infinity;
  // }

  let negative = 2;
  if (dividend > 0) {
    negative--;
    // 正数转负数，防止越界
    dividend = -dividend;
  }

  if (divisor > 0) {
    negative--;
    // 除数也转为负数，与被除数保持一致
    divisor = -divisor;
  }

  let result = divideCore(dividend, divisor);
  // 二者有一个负数，则结果为负数
  return negative == 1 ? -result : result;

  function divideCore(dividend, divisor) {
    let result = 0;
    while (dividend <= divisor) {
      let value = divisor;
      let quotient = 1;
      while (value >= HALF_MINIST_INTEGER.VAL && dividend <= value + value) {
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