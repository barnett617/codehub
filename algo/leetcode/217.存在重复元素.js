/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // 解法一
    // var obj = {};
    // for (var i = 0; i < nums.length; i++) {
    //     obj[nums[i]] = obj[nums[i]] + 1 || 1;
    //     if (obj[nums[i]] > 1) return true
    // }
    // return false

    // 创建字典，遍历数组
    // 如果不存在于字典，则存 1
    // 如果已存在于字典，则存 2
    // 如果有元素是 2，则存在重复元素

    // (80 ms)
    // (42.8 MB)

    // 解法二
    // return new Set(nums).size < nums.length
    // 94.1 %
    // 63.64 %

    // 解法三
    // return nums.sort().some((v, k) => v === nums[k - 1])
    // 36.43 %
    // 72.73 %
};
// @lc code=end

