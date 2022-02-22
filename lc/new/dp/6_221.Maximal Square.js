// https://leetcode.com/problems/maximal-square/

// 思路：创建一个和矩阵相同的二维数组，用于存储每个位置的状态
// 初始化每个格子的状态为0，并且从第一行第一列的位置开始计算每个格子的状态
// 如果某个格子为1，则有机会成为更大的正方形右下角，此时计算其左上方的所有格子的最小长度
// 当更新完一个格子的状态后，需要计算全局最大边

// TIME: O(mn)
// SPACE: O(mn)

function maximalSquare(matrix) {
    const row = matrix.length;
    const col = matrix.length ? matrix[0].length : 0;
    const dp = Array(row+1).fill(null).map(x => Array(col+1).fill(0));

    let maxSideLen = 0;
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            if (matrix[i-1][j-1] === '1') {
                dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
                maxSideLen = Math.max(maxSideLen, dp[i][j]);
            }
        }
    }
    return maxSideLen * maxSideLen;
}