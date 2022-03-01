// https://leetcode.com/problems/power-of-three/

// 思路：转成三进制，然后正则

function isPowerOfThree(n) {
    if (n === 1) return true;
    if (n < 3) return false;
    const str = (n).toString(3);
    return /^10*$/.test(str);
}