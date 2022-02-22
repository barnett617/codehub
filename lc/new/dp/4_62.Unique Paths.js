// https://leetcode.com/problems/unique-paths/

// 思路：当前步可移动的选择数等于前一步决定数+2
// 2表示上一步之后向右走或向下走
// 即每一步的选择数都是上一行累计的选择数加上前一列累计选择数

// TIME: O(mn)
// SPACE: O(mn)
function uniquePaths(m, n) {
    if (m === 1 || n === 1) return 1;
    return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
}

// 思路：使用二维数组记录每一步的状态
// 初始化每个格子的选择数都为1，然后重新计算从第一步选择右移或下移后的选择总和
// TIME: O(mn)
// SPACE: O(mn)
function uniquePaths(m, n) {
    const dp = Array(m).fill(null).map(x => Array(n).fill(1));
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
}