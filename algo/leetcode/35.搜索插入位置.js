/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // 第一次答案
    // let i = 0;
    // while(i < nums.length) {
    //     // 如果目标数字小于第一个不必放在循环内
    //     if (target < nums[i]) {
    //         nums.unshift(target);
    //         return 0
    //     } else if (target > nums[i]) {
    //         if (target < nums[i+1]) {
    //             nums.push(target)
    //             return i+1
    //         } else {
    //             i++;
    //         }
    //     } else {
    //         return i
    //     }
    // }
    // // 审题问题：返回将被插入的位置，而非真正插入
    // nums.push(target);
    // return nums.length - 1

    // 改进后
    if (target < nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            return i;
        } else if (target > nums[i] && target < nums[i+1]) {
            // 将被插入该位置
            return i+1;
        }
    }

    // 网上参考
    // if (target < nums[0]) return 0;
    // if (target > nums[nums.length-1]) return nums.length;
    
    // for (let i=0 ; i<nums.length ; i++) {
    //     if (nums[i] === target || (nums[i] > target && nums[i-1] < target)) {
    //         return i;
    //     } else if (nums[i] > target) {
    //         // 我觉得这个判断多余，永远不会走到
    //         return i-1
    //     }
    // }
};
searchInsert([1,3,5,6], 2)
// @lc code=end

