// https://leetcode.com/problems/power-of-two/

// 思路：n和n-1按位与以后是否为0

function isPowerOfTwo(n) {
    return n > 0 && !(n & (n - 1))
}