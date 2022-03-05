// https://leetcode.com/problems/ugly-number/

// 思路：不断拿目标数和目标质数相除，如果除到1则为真，否则为假

function isUgly(n) {
    if (n <= 0) return false;
    for (const p of [30, 15, 10, 5, 3, 2]) {
        while (n >= p && n % p === 0) {
            n = Math.floor(n / p);
        }
    }
    return n === 1;
}