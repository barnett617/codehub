/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // 高斯定律
    // var sum = 0;
    // for (var i = 0; i < nums.length; i++) {
    //     sum += nums[i];
    // }
    // return (1 + nums.length) * nums.length / 2 - sum
    // 80.22 %
    // 60.61 %

    // 异或运算
    // 0 ^ 0 ^ 1 ^ 1 ^ 2 ^ 2 ^ 3 ^ 3
    // value1 ^ index1 ^ value2 ^ index2 ^ valueLast ^ arrLength
    // [3, 0, 1]
    // 2
    // 3 ^ 0 ^ 0 ^ 1 ^ 1 ^ 2 ^ length(3) === 2 === missing
    var missing = nums.length;
    for (var i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i]
    }
    return missing;
    // 95.83 %
    // 81.82 %
};
// @lc code=end

