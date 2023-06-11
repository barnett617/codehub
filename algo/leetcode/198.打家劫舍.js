/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var result = nums.reduce((prev, now) => {
        return [prev[1], Math.max((prev[0] + now), prev[1])]
    }, [0, 0])
    return result[1]
};
rob([2,1,1,2])
// prev[1]始终用来记录累加过程中的最大值
// 同时每次也会和上上个值与当前值的加和(prev[0] + now)做比较
// 而每一次的prev[0]记录着上一次的prev[1],即上一个数
// @lc code=end

