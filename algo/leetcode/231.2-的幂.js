/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // 第一想法
    // var str = (n).toString(2);
    // var arr = str.split('');
    // var firstChar = arr.shift();
    // return +firstChar === 1 && +arr.join('') === 0 

    // 96.48 %
    // 8 %

    // 第一想法改进
    // return /^10*$/.test((n).toString(2))

    // 88.84 %
    // 24 %

    // 参考解法一（利用二进制减法结合与运算）
    // return n > 0 ? !(n & (n - 1)) : false

    // 96.48 %
    // 8 %

    // 参考解法二（利用数学公式）
    // return Math.log2(n) % 1 === 0
    // 64.07 %
    // 8 %
    // 以 2 为底，n 的对数如果是整数，则 n 是 2 的 n 次方

    // 参考算法三（2的n次方的数在二进制形式下应该只有一个1）
    return (n).toString(2).replace(/0/g, '').length === 1
    // 45.41 %
    // 8 %
};
// @lc code=end

