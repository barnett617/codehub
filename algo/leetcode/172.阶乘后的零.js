/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // var fun = function(n) {
    //     var result;
    //     if (n > 1) {
    //         return n * fun(n - 1)
    //     }
    //     return 1
    // }
    // var result = fun(n);
    // var out = 0;
    // while (true) {
    //     if (result % 10 === 0) {
    //         out++;
    //         result = result / 10;
    //     } else {
    //         return out
    //     }
    // }

    // 最优解
    let numZeroes = 0;
    for (let i = 5; i <= n; i *= 5) {
        numZeroes += Math.floor(n / i);
    }
    return numZeroes;
    // 解析
    // n个连续整数数求乘积,当遇到 5*2 的时候,结果尾数会多一个0(n小于5的时候,结果尾数不会有0)
    // 也就是要寻找n个数中 5*2 的组合数
    // 但实际5和任意偶数相乘都会产生0(因为偶数是2的倍数,而5*2=10, 10乘任何数尾数都有0)
    // 所以要找逐个找出和5相乘存在于这n个数中的数，即 n/5
    // 寻找过程中可能会有数是5的n次幂，也就意味着该数可以拆解为n个5相乘
    // 其中的1个5已经在上一轮寻找中记录，剩下的5需要通过 n/（5的2次方） 计算有多少个这样的数
    // 以此类推，寻找 n / (5的x次方)，需要满足 n >= 5的x次方 (也就是分子大于分母，能被 n 除出正数的)
};
trailingZeroes(1000);
// @lc code=end

