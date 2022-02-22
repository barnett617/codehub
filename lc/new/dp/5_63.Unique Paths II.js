// https://leetcode.com/problems/unique-paths-ii/

// 思路：创建一个二维数组用于记录每个格子的累计可选步数
// 首先初始化起始位置状态，根据是否有障碍物进行初始化
// 然后初始化第一行所有格子的状态，根据当前格子是否有障碍物以及前一列格子的步数计算所得
// 然后初始化第一列所有格子的状态，根据当前格子是否有障碍物以及前一行格子的步数计算所得
// 然后根据第一行第一列推导出每个格子的选择数
// 最终最后一个格子的状态即是所有可能的步数

// TIME: O(mn)
// SPACE: O(mn)

function uniquePathsWithObstacles(obstacleGrid) {
    const row = obstacleGrid.length;
    const col = obstacleGrid[0].length;

    const dp = Array(row).fill(null).map(x => Array(col));

    dp[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1;
    
    for (let i = 1; i < col; i++) {
        if (obstacleGrid[0][i] === 1) {
            dp[0][i] = 0;
        } else {
            dp[0][i] = dp[0][i-1];
        }
    }

    for (let i = 1; i < row; i++) {
        if (obstacleGrid[i][0] === 1) {
            dp[i][0] = 0;
        } else {
            dp[i][0] = dp[i-1][0];
        }
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }

    return dp[row - 1][col - 1];
}