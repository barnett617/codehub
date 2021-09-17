/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
    const res = [];
    const cols = new Set();
    const pie = new Set();
    const na = new Set();
    var dfs = function(row, n, cur) {
        // 终止条件 => 所有行都查找结束
        if (row >= n) {
            res.push(cur);
            return;
        }
        // 当前行，每一列的可能摆法
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || pie.has(row + col) || na.has(row - col)) {
                continue;
            }
            // 当排除掉不能放的位置后，即得到可以放的位置
            // 记录当前行下放置的位置（列值）
            cols.add(col);
            pie.add(row + col);
            na.add(row - col);
            // 继续查找下一行
            // 这里传给下一行的状态应该是和当前行相互隔离的，否则递归返回时会污染当前层
            const newCur = cur.slice();
            newCur.push(col);
            dfs(row + 1, n, newCur);
            // 当递归返回，则意味着某一列的所有行的摆放方案都已拿到，则可以清除该字典内该列的禁放区域
            cols.delete(col);
            pie.delete(row + col);
            na.delete(row - col);
        }
    }
    dfs(0, n, []);
    // 结果集存放着所有皇后可放方案的集合
    // 数组每个元素对应一种方案
    // 每个方案种的每个元素对应放置列的位置
    // 每个元素所在索引对应行的位置
    // res [ [ 1, 3, 0, 2 ], [ 2, 0, 3, 1 ] ]
    var solve_board = function(res) {
        console.log('res', res)
        const result = [];
        for (let board of res) {
            // 某一种方案
            // 棋盘长度即为行数
            const cur_result = [];
            for (let i = 0; i < board.length; i++) {
                const q_index = board[i];
                let row = new Array(n).fill('.');
                row[q_index] = 'Q';
                cur_result.push(row.join(''));
            }
            result.push(cur_result);
        }
        return result;
    }
    const result = solve_board(res);
    return result;
};

solveNQueens(4);