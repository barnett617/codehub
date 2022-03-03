// https://leetcode.com/problems/arithmetic-slices/

// 思路：使用dp数组记录每个位置是否满足条件，如果满足则加前一个数的基础上+1
// 每当出现新满足条件的情况，就在结果上进行累加

// TIME: O(n)
// SPACE: O(n)

function numberOfArithmeticSlices(nums) {
    if (nums.length < 3) return 0;

    const dp = Array(nums.length).fill(0);
    let res = 0;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            dp[i] = 1 + dp[i - 1];
            res += dp[i];
        }
    }
    return res;
}