// https://leetcode.com/problems/max-area-of-island/

// 思路：创建一个帮助函数用于DFS递归每个元素
// 在递归开始声明终止条件，即触达边缘，或元素不满足
// 进入递归则执行主逻辑，需要将当前岛屿置为海水，以查看其周边是否存在连接岛屿
// 记入本地递归所产生的总岛屿数并返回
// 为避免岛屿被重复访问，使用与矩阵相同大小的二维数组用于记忆访问过的格子

// TIME: O(mn)
// SPACE: O(mn)

function maxAreaOfIsland(grid) {
    if (!grid || !grid.length || !grid[0].length) return 0;

    let max = 0;
    const memo = Array(grid.length).fill(null).map(x => Array(grid[0].length).fill(false));
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (memo[i][j]) continue;
            const newArea = helper(grid, i, j);
            if (newArea > max) {
                max = newArea;
            }
        }
    }

    function helper(grid, row, col) {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] !== 1) return 0;

        let count = 1;
        grid[row][col] = 0;
        memo[row][col] = true;

        count += helper(grid, row - 1, col);
        count += helper(grid, row + 1, col);
        count += helper(grid, row, col - 1);
        count += helper(grid, row, col + 1);

        return count;
    }

    return max;
}