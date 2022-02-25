// https://leetcode.com/problems/rotting-oranges/

// 思路：每个坏橘子会向四周蔓延，所以使用BFS进行层级遍历
// 使用队列进行BFS，并使用一个标识作为每层遍历结束的标志
// 最后如果还剩好橘子，则说明有好橘子无法被波及，则返回-1，否则返回累计的层级数即可

// TIME: O(n)
// SPACE: O(n)

function orangeRotting(grid) {
    const queue = [];
    let fresh = 0;
    let min = -1;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                fresh++;
            }
        }
    }

    queue.push([-1,-1]);
    const directions = [[-1,0], [1,0], [0,-1], [0,1]];
    while (queue.length) {
        const [row, col] = queue.shift();
        if (row === -1) {
            min++;
            if (queue.length) {
                queue.push([-1,-1]);
            }
        } else {
            for (const direction of directions) {
                const newRow = row + direction[0];
                const newCol = col + direction[1];
                if (newRow >= 0 && newCol >= 0 && newRow < grid.length && newCol < grid[0].length && grid[newRow][newCol] === 1) {
                    grid[newRow][newCol] = 2;
                    queue.push([newRow, newCol]);
                    fresh--;
                }
            }
        }
    }

    return fresh > 0 ? -1 : min;
}