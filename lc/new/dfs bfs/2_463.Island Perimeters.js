// https://leetcode.com/problems/island-perimeter/

// 思路：遍历每个格子，如果是岛屿，则计数+4
// 当遇到相邻岛屿时，需要-2，因为两个岛屿相邻，会各自废弃一条边

// TIME: O(mn)
// SPACE: O(1)

function islandPerimeters(grid) {
    if (!grid || !grid.length || !grid[0].length) return 0;

    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                res += 4;
                if (i > 0 && grid[i-1][j]) res -= 2;
                if (j > 0 && grid[i][j-1]) res -= 2;
            }
        }
    }
    return res;
}