/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // 原理尚未得知，为判断规律，目前归类为数学解法
    return num < 10 ? num : (num % 9 === 0 ? 9 : num % 9)

    // 85.39 %
    // 59.09 %
};
// @lc code=end

