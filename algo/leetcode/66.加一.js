/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits[digits.length - 1] !== 9) {
        digits[digits.length - 1] += 1;
        return digits
    } else {
        digits[digits.length - 1] = 0;
        // 一开始遗漏了 i=0 的比较
        for (let i = digits.length - 2; i >= 0; i--) {
            if (digits[i] !== 9) {
                digits[i] += 1;
                return digits
            } else {
                digits[i] = 0
            }
        }
        digits.unshift(1);
        return digits
    }
};
plusOne([9, 9])
// @lc code=end

