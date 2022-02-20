// https://leetcode.com/problems/simplified-fractions/

// 思路：依次使用每个元素作为分母，并寻找比其小的分子，排除最大公约数不为1的组合

function simplifiedFractions(n) {
    const res = [];
    if (n < 2) return res;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            if (j !== 1 && gcd(j, i) !== 1) continue;
            res.push([j, i].join('/'));
        }
    }
    function gcd(x, y) {
        while (x > 0) {
            [x, y] = [y % x, x];
        }
        return y;
    }
    return res;
}