// [["8","3",".",".","7",".",".",".","."],
// ["6",".",".","1","9","5",".",".","."],
// [".","9","8",".",".",".",".","6","."],
// ["8",".",".",".","6",".",".",".","3"],
// ["4",".",".","8",".","3",".",".","1"],
// ["7",".",".",".","2",".",".",".","6"],
// [".","6",".",".",".",".","2","8","."],
// [".",".",".","4","1","9",".",".","5"],
// [".",".",".",".","8",".",".","7","9"]]

var isValidSudoku = function(board) {
    if (board == null || !board.length) return;

    const rows = new Set();
    const cols = new Set();
    const boxes = new Set();
    for (let i = 0; i < 9; i++) {
        rows[i] = new Set();
        cols[i] = new Set();
        boxes[i] = new Set(); 
    }
    var getBoxIndex = function(i, j) {
        if (i <= 2 && j <= 2) return 0;
        if (i <= 2 && j <= 5) return 1;
        if (i <= 2 && j <= 8) return 2;
        if (i <= 5 && j <= 2) return 3;
        if (i <= 5 && j <= 5) return 4;
        if (i <= 5 && j <= 8) return 5;
        if (i <= 8 && j <= 2) return 6;
        if (i <= 8 && j <= 5) return 7;
        if (i <= 8 && j <= 8) return 8;
    }
    var isValid = function (board, row, col, c) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                // 只检查是数字的项（剪枝）
                if (board[i][j] !== '.') {
                    const num = +board[i][j];
                    // 如果当前行没出现过该元素，则记录
                    if (rows[i].has(num)) {
                        return false;
                    } else {
                        rows[i].add(num);
                    }
                    // 如果当前列没出现过该元素，则记录
                    if (cols[j].has(num)) {
                        return false;
                    } else {
                        cols[j].add(num);
                    }
                    // 如果当前盒子没出现过该元素，则记录
                    const boxIndex = getBoxIndex(i, j);
                    if (boxes[boxIndex].has(num)) {
                        return false;
                    } else {
                        boxes[boxIndex].add(num);
                    }
                }
            }
        }
        return true;
    }
    return isValid(board);
}

function main() {
    var board = [
        ["8","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]
    var board2 = [
        [".","8","7","6","5","4","3","2","1"],
        ["2",".",".",".",".",".",".",".","."],
        ["3",".",".",".",".",".",".",".","."],
        ["4",".",".",".",".",".",".",".","."],
        ["5",".",".",".",".",".",".",".","."],
        ["6",".",".",".",".",".",".",".","."],
        ["7",".",".",".",".",".",".",".","."],
        ["8",".",".",".",".",".",".",".","."],
        ["9",".",".",".",".",".",".",".","."]
    ]
    var board3 = [
        [".",".","4",".",".",".","6","3","."],
        [".",".",".",".",".",".",".",".","."],
        ["5",".",".",".",".",".",".","9","."],
        [".",".",".","5","6",".",".",".","."],
        ["4",".","3",".",".",".",".",".","1"],
        [".",".",".","7",".",".",".",".","."],
        [".",".",".","5",".",".",".",".","."],
        [".",".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".",".","."]
    ]
    var board4 = [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]
    console.log(isValidSudoku(board));
}