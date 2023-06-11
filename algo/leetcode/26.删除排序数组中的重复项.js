/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        while(nums[i+1] === nums[i]) {
            if (nums[i+1] === nums[i]) {
                nums.splice(i+1, 1);
            }
        }
    }
    return nums.length;
};
// 第一次失败只考虑了相邻的两个元素相等，忽略了可能相邻的多个元素相等
// 而且不需要嵌套循环
// 也不需要遍历到最后一个元素
// 而且因为原地删除了重复元素，使得遍历的位置改变
removeDuplicates([0,0,1,1,1,2,2,3,3,4])
// @lc code=end

