// https://leetcode.com/problems/maximum-alternating-subsequence-sum/

// 思路：使用二维数组记录当前索引下，偶数或奇数位置可得到的最大值
// 创建帮助函数用于递归，递归开始声明终止条件，即触达数组边界
// 如果命中访问过的元素则直接返回，否则根据当前是否为偶数索引，求得当前数值
// 更新当前位置的最大值，通过比较下一个值是否要取

function maxAlternatingSum(nums) {
    const memo = Array(nums.length).fill(null).map(x => Array(2));
    function helper(i, even) {
        if (i === nums.length) return 0;
        if (memo[i][even]) return memo[i][even];

        const newValue = even ? nums[i] : -nums[i];
        memo[i][even] = Math.max(newValue + helper(i+1, !even), helper(i+1, even));
        return memo[i][even];
    }
    return helper(0, true);
}