/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        while(nums[i] === val) {
            if (nums[i] === val) {
                nums.splice(i, 1);
            }
        }
    }
    return nums.length;
};
// @lc code=end

