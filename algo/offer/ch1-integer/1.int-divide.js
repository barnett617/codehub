// 整数除法，不能使用 * / %
// 溢出时返回最大整数
// 除数不为0

// 思路: 减法
// 被除数不断减去除数
function divide(dividend, divisor) {
  let count = 0;
  while (dividend >= divisor) {
    dividend -= divisor;
    count++;
  }
  return count;
}

print(divide(7, 2));
print(divide(2312332342321312312312, 1))

// O(n)

function print(msg) {
  console.log(msg);
}

// 思路: 减去除数的2的k次方
function divide2(dividend, divisor) {
  let count = 0;
  let temp = 0;
  while (dividend >= temp) {
    let temp += (divisor + divisor);
  }
}
