// https://leetcode.com/problems/longest-increasing-subsequence/

// 思路：使用一个和输入项等长的数组用于存储每个位置的状态，值初始化为1
// 从倒数第二个元素，依次比较该位置最大值和其后面元素的最大值更大者
// 最后返回整个数组的最大值

// TIME: O(n^2)
// SPACE: O(n)

function lengthOfLIS(nums) {
    const dp = Array(nums.length).fill(1);
    for (let i = nums.length - 2; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
    }
    return Math.max(...dp);
}