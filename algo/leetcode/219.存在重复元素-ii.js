/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // 创建字典
    // 字典值用于存储索引，字典键存储该索引位置的元素值
    // 当遇到已存在元素时判断索引差是否满足条件
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        if (map[nums[i]] >= 0 && (i - map[nums[i]] <= k)) return true;
        map[nums[i]] = i;
    }
    return false;
    // 53.78 %
    // 14.29 %
};
// @lc code=end

