// https://leetcode.com/problems/house-robber/

// 思路：从最后一次开始判断，递归比较前一次的值更大，还是前前次加上当前值更大
// 并在递归的过程中将每次的计算缓存下来

function rob(nums) {
    // 2 7 9 3 1
    function helper(nums, i, memo) {
        if (i < 0) return 0;
        if (memo.has(i)) return memo.get(i);
        const dp1 = helper(nums, n-1);
        const dp2 = helper(nums, n-2) + nums[n];
        const max = Math.max(dp1, dp2);
        memo.set(i, max);
        return max;
    }
    helper(nums, nums.length - 1, new Map());
}

// 思路：从第一次开始计算，每个新的结果都应是当前节点所做的最优选择
// 使用和目标数组相同大小的数组记录每一个的最优状态

function rob(nums) {
    const n = nums.length;
    const dp = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        dp1 = dp[i-1] || 0;
        dp2 = (dp[i-2] || 0) + nums[i];
        dp[i] = Math.max(dp1, dp2);
    }
    return dp[n-1];
}

// 思路：使用两个变量模拟数组的移动

function rob(nums) {
    let dp1 = 0;
    let dp2 = 0;
    for (let i = 0; i < nums.length; i++) {
        let dp = Math.max(dp1, dp2 + nums[i]);
        dp2 = dp1;
        dp1 = dp;
    }
    return dp1;
}