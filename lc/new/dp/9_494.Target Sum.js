// https://leetcode.com/problems/target-sum/

// 思路：使用二维数组记录当前索引当前和的状态
// 因为对于每个索引位置有+1和-1两种状态，而某个索引位置期望存储的是两种状态的总数
// 所以在遍历中将二者之和进行记录

// TIME: O(n)
// SPACE: O(n)

function findTargetSumWays(nums, target) {
    const sum = nums.reduce((acc, cur) => acc + cur);
    const dp = Array(nums.length).fill(null).map(x => Array(sum * 2 + 1).fill(null));

    function helper(index, total) {
        if (index === nums.length) {
            return total === target ? 1 : 0;
        }
        if (dp[index][total] != null) {
            return dp[index][total];
        }
        dp[index][total] = helper(index + 1, total + nums[index]) + helper(index + 1, total - nums[index]);
        return dp[index][total];
    }
    return helper(0, 0);
}