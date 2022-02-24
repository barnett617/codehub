// https://leetcode.com/problems/number-of-islands/

// 思路：创建帮助函数用于递归调用每个岛屿的相邻方向以判断是否连接
// 递归开始声明终止条件，即触达边界或不符条件
// 然后执行主逻辑，即将当前位置置为海水，然后依次查看其四个方向是否依然是岛屿
// 如果四个方向都未返回false，则说明当前岛屿可以连接成有效岛屿

// TIME: O(mn)
// SPACE: O(mn)

function numIslands(grid) {
    if (!grid || !grid.length || !grid[0].length) return 0;

    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (helper(grid, i, j)) {
                res++;
            }
        }
    }

    function helper(grid, row, col) {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] !== '1') return false;

        grid[row][col] = '0';
        helper(grid, row-1, col);
        helper(grid, row+1, col);
        helper(grid, row, col-1);
        helper(grid, row, col+1);
        return true;
    }

    return res;
}