// https://leetcode.com/problems/divide-two-integers/

// 思路：不断用被除数减去除数，并且每次减后将被除数叠加一遍
// 当最小的负数与-1相除时，会诞生超出最大整数的值，做单独处理
// 使用绝对值进行计算，最后要对负数情况处理

function divide(dividend, divisor) {
    const smallest = -(2 ** 31);
    if (dividend === smallest && divisor === -1) {
        return 2 ** 31 - 1;
    }

    let a = Math.abs(dividend), b = Math.abs(divisor);
    let res = 0;
    while (a >= b) {
        let temp = b;
        let multiply = 1;
        while (a >= temp) {
            a -= temp;
            temp += temp;
            res += multiply;
            multiply += multiply;
        }
    }
    if (dividend < 0 && divisor >= 0) res = -res;
    if (dividend >= 0 && divisor < 0) res = -res;
    return res;
}