var solveSuduku = function(board) {
    if (!board || !board.length) return;

    const box = new Array(9);
    for (let i = 0; i < 9; i++) {
        box[i] = new Set();
    }
    var getBoxIndex = function(i, j) {
        return Math.floor(i / 3) * 3 + Math.floor(j / 3);
    }

    var isValid = function(board, row, col, c) {
        const boxIndex = getBoxIndex(row, col);
        if (box[boxIndex].has(c)) return false;
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === c) return false;
            if (board[i][col] === c) return false;
        }
        return true;
    }
    var solve = function (board) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const str = board[i][j];
                const boxIndex = getBoxIndex(i, j);
                if (str === '.') {
                    for (let c = 1; c <= 9; c++) {
                        const newStr = '' + c;
                        // 拿新的尝试元素去判断新元素是否合法
                        if (isValid(board, i, j, newStr)) {
                            // 如果合法则插入该元素，并递归查看在此基础上，后续插入是否可行
                            board[i][j] = newStr;
                            box[boxIndex].add(newStr);
                            if (solve(board)) {
                                // 如果后续行为都可行，则该步插入是可行的，否则需要撤销本次插入
                                return true;
                            } else {
                                board[i][j] = '.';
                                box[boxIndex].delete(newStr);
                            }
                        }
                    }
                    // 初始的棋牌是合法的，但错误可能发生于插入新的元素后
                    // 如果因为前一个元素的插入，导致后一个元素没有合适的可放元素，则需要回溯
                    return false;
                } else {
                    box[boxIndex].add(str);
                }
            }
        }
        return true;
    }
    solve(board);
    return board;
}

function main() {
    var arr = [
        ["5","3","9","6","7","8","4","2","."],
        ["6","8","7","1","9","5","3","4","2"],
        ["2","9","8","3","4",".","7","6","."],
        ["8","7","5","9","6","4","1",".","3"],
        ["4","5","6","8",".","3","9",".","1"],
        ["7","1","3","5","2",".","8","9","6"],
        ["9","6","4","7","5","1","2","8","."],
        ["3","2",".","4","1","9","6",".","5"],
        ["1","4","2",".","8","6",".","7","9"]
    ]
}