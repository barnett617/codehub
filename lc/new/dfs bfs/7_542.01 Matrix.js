// https://leetcode.com/problems/01-matrix/

// 思路：创建一个和矩阵相同的二维矩阵作为返回结果，并给每个元素初始化为最大值
// 正向遍历一边每个元素，并给值为0的格子初始化状态为0
// 然后对于上方或左侧存在有效元素的情况下，比较是否存在更小的距离，并更新到当前格子
// 最后从矩阵末尾往回遍历，依次根据下方和右方状态，计算每个格子的最优状态

// TIME: O(mn)
// SPACE: O(mn)

function updateMatrix(mat) {
    if (!mat || !mat.length || !mat[0].length) return [];

    const res = Array(mat.length).fill(null).map(x => Array(mat[0].length).fill(Infinity));

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 0) {
                res[i][j] = 0;
            } else {
                if (i > 0) {
                    res[i][j] = Math.min(res[i][j], res[i-1][j] + 1);
                }
                if (j > 0) {
                    res[i][j] = Math.min(res[i][j], res[i][j-1] + 1);
                }
            }
        }
    }

    for (let i = mat.length - 1; i >= 0; i--) {
        for (let j = mat[i].length - 1; j >= 0; j--) {
            if (i < mat.length - 1) {
                res[i][j] = Math.min(res[i][j], res[i+1][j] + 1);
            }
            if (j < mat[i].length - 1) {
                res[i][j] = Math.min(res[i][j], res[i][j+1] + 1);
            }
        }
    }

    return res;
}