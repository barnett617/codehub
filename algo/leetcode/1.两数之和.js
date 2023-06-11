/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 暴力遍历
    // if (!nums.length) return []
    // for (var i = 0; i < nums.length; i++) {
    //     for (var j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) return [i, j] 
    //     }
    // }
    // return []
    // 31.56 %
    // 81.36 %

    // 两遍使用字典存储(空间换时间)
    if (!nums.length) return []
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        // map[nums[i]] = i;
        // 优化：如果把差值存起来呢
        map[target - nums[i]] = i;
    }
    for (var i = 0; i < nums.length; i++) {
        // if (map[target - nums[i]] !== undefined && i !== map[target - nums[i]]) {
        //     return [i, map[target - nums[i]]]
        // }
        if (map[nums[i]] !== undefined && i !== map[nums[i]]) {
            return [i, map[nums[i]]]
        }
        // 82.76 %
        // 8.47 %
    }
    return []
    // 82.76 %
    // 11.01 %

    // 一遍字典
    // var map = {}
    // for (var i = 0; i < nums.length; i++) {
    //     if (map[target - nums[i]] !== undefined) {
    //         return [map[target - nums[i]], i]
    //     } 
    //     map[nums[i]] = i;
    // }
    // 74.04 %
    // 88.98 %
};
// @lc code=end

