// https://leetcode.com/problems/number-of-1-bits/

// 思路：n和n-1按位与可以消除末位的1

function hammingWeight(n) {
    let res = 0;
    while (n !== 0) {
        res++;
        n = (n & (n - 1));
    }
    return res;
}