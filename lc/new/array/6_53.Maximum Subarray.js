// https://leetcode.com/problems/maximum-subarray/

// 思路：创建一个全局最大值，创建一个当前最大值
// 如果新的元素和当前最大值加上新元素比更大，则将当前最大值更新当前元素
// 每次都比较一下当前最大和全局最大哪个更大，及时更新全局最大

// TIME: O(n)
// SPACE: O(1)

function maxSubArray(nums) {
    let max = nums[0];
    let cur = nums[0];
    for (let i = 1; i < nums.length; i++) {
        cur = Math.max(cur + nums[i], nums[i]);
        max = Math.max(max, cur);
    }
    return max;
}