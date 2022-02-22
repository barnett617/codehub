// https://leetcode.com/problems/maximum-subarray/

// 思路：暴力比较，以每个元素作为开始的子数组，计算存在的最大值，并与全局最大值进行比较
// TIME: O(n^2)
// SPACE: O(1)
function maxSubArray(nums) {
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        let cur = 0;
        for (let j = i; j < nums.length; j++) {
            cur += nums[j];
            max = Math.max(max, cur);
        }
    }
    return max;
}

// 思路：使用与数组等长的状态数组，记录每个索引所在位置的最大值
// 每个位置所在的最大值等于当前值与前一个最大值加上当前值之后的比较
// TIME: O(n)
// SPACE: O(n)

function maxSubArray(nums) {
    const dp = Array(nums.length);
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    }
    return Math.max(...dp);
}

// 思路：仅记录一个局部最大值和一个全局最大值变量，每次变量更新二者
// TIME: O(n)
// SPACE: O(1)
function maxSubArray(nums) {
    let curMax = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        curMax = Math.max(nums[i], nums[i] + curMax);
        max = Math.max(max, curMax);
    }
    return max;
}

