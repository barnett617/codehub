/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  // dp 3 steps:
  // 1、a function or array called dp, which stand the current state
  // 2、a way to transition, dp[i] = max(dp[[j]] + 1)
  // 3、base case
  
  const dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
          if (nums[j] < nums[i]) {
              dp[i] = Math.max(dp[i], dp[j] + 1);
          }
      }
  }
  
  return Math.max(...dp);
};

module.exports = lengthOfLIS;