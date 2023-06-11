/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 数组遍历
    // var list = [];
    // for (var i = 0; i < nums.length; i++) {
    //     if (list.indexOf(nums[i]) < 0) {
    //         list.push(nums[i]);
    //     } else {
    //         list.splice(list.indexOf(nums[i]), 1);
    //     }
    // }
    // return list[0];
    // (228 ms)
    // (38.2 MB)

    // HashMap
    // var map = {};
    // for (var i = 0; i < nums.length; i++) {
    //     if (map[nums[i]]) {
    //         delete map[nums[i]];
    //     } else {
    //         map[nums[i]] = 1;
    //     }
    // }
    // return Object.keys(map)[0]
    //  (68 ms)
    //  (37.3 MB)

    // Math
    // var sumOfNums = 0, sumOfSet = 0;
    // var set = new Set();
    // for (var i = 0; i < nums.length; i++) {
    //     sumOfNums += nums[i];
    //     if (!set.has(nums[i])) {
    //         set.add(nums[i]);
    //         sumOfSet += nums[i];
    //     } 
    // }
    // return sumOfSet * 2 - sumOfNums
    //  (72 ms)
    // (37.9 MB)

    // XOR
    var a = 0;
    for (var i = 0; i < nums.length; i++) {
        a = a ^= nums[i]
    }
    return a
    // 56 ms
    // (35.7 MB)
};
singleNumber([2, 2, 1]);
// @lc code=end

