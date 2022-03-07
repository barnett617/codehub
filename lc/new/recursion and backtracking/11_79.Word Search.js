// https://leetcode.com/problems/word-search/

// 思路：使用回溯将每个首字母匹配单词的字母作为起点，进行四个方向的递归寻找下一个匹配的字符
// 如果超出边界或字符不匹配则终止，否则继续寻找，直至所有字符遍历结束

// TIME: O(mn4^word.length)
// SPACE: O(n)

function exist(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }
    function dfs(row, col, wordIndex) {
        if (wordIndex === word.length) return true;
        if (row < 0 
            || row >= board.length 
            || col < 0 
            || col >= board[row].length 
            || board[row][col] !== word[wordIndex]) {
            return false;
        }
        const temp = board[row][col];
        board[row][col] = '';
        const found = dfs(row + 1, col, wordIndex + 1)
        || dfs(row - 1, col, wordIndex + 1)
        || dfs(row, col + 1, wordIndex + 1)
        || dfs(row, col - 1, wordIndex + 1);
        board[row][col] = temp;
        return found;
    }
    return false;
}