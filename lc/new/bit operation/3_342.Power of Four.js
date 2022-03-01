// https://leetcode.com/problems/power-of-four/

// 思路：转成四进制，然后正则

function isPowerOfFour(n) {
    if (n === 1) return true;
    if (n < 4) return false;
    const str = (n).toString(4);
    return /^10*$/.test(str);
}