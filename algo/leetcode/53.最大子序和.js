/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentMax = 0;
    // 解法存疑
    return nums.reduce((maxArray, num) => {
        // 当前值加上目前的累计最大值是否变得更大
        currentMax = Math.max(num, currentMax + num);
        // 返回当前最大值和累加最大值中更大的一个
        return Math.max(maxArray, currentMax);
    }, nums[0])
};
maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
// @lc code=end

