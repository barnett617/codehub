// https://leetcode.com/problems/reverse-bits/

// 思路：遍历32次，将每一位拿出放置到结果数里
// 每次放置新的一位前，将前面的数左移一位腾出位置
// js左移需慎重

function reverseBits(n) {
    let res = 0;
    let count = 32;
    while (count) {
        // res = (res << 1);
        res *= 2;
        res += (n & 1);
        n = (n >> 1);
        count--;
    }
    return res;
}