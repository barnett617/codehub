const MINIST_INTEGER = {
  CODE: 0x80000000,
  VAL: -Math.pow(2, 31)
}

const HALF_MINIST_INTEGER = {
  CODE: 0xc0000000,
  VAL: -Math.pow(2, 30)
}

function divide(dividend, divisor) {
  if (dividend == MINIST_INTEGER.CODE && divisor === -1) {
    return Infinity;
  }

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

  int result = divideCore(dividend, divisor);
  return negative == 1 ? -result : result;

  function divideCore(dividend, divisor) {
    let result = 0;
    while (dividend <= divisor) {
      let value = divisor;
      let quotient = 1;
      while (value >= HALF_MINIST_INTEGER.CODE && dividend <= value + value) {
        quotient += quotient;
        value += value;
      }

      result += quetient;
      dividend -= value;
    }

    return result;
  }
}
