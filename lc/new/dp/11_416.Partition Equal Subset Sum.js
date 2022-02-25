// https://leetcode.com/problems/partition-equal-subset-sum/

// 思路：寻找子集和恰好等于总和一半，则一定有另一个子集和与之相等
// 对于每个子集的元素，都可以选择要或不要

function canPartition(nums) {
    const sum = nums.reduce((acc, cur) => acc + cur);
    if (sum % 2) return false;

    const memo = Array(nums.length).fill(null).map(x => Array(2));
    function helper(index, curSum) {
        if (curSum * 2 === sum) return true;
        if (curSum * 2 > sum || index >= nums.length) return false;
        if (memo[index][curSum] != null) return memo[index][curSum];
        memo[index][curSum] = helper(index+1, curSum) || helper(index+1, curSum + nums[index]);
        return memo[index][curSum];
    }
    return helper(0, 0);
}