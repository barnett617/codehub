var findWords = function(board, words) {
    var word_key = '$';

    var trie = new Map();
    for (let word of words) {
        var node = trie;
        for (let letter of word) {
            if (!node.get(letter)) {
                node.set(letter, new Map());
            }
            node = node.get(letter);
        }
        node.set(word_key, word);
    }

    var rowNum = board.length;
    var colNum = board[0].length;

    var matchedWords = [];

    var backtracking = function(row, col, parent) {
        var letter = board[row][col];
        var currNode = parent.get(letter);

        const word_match = currNode.get(word_key);
        if (word_match) {
            currNode.delete(word_key);
            matchedWords.push(word_match);
        }

        board[row][col] = '#';

        for (let nextStep of [[-1, 0], [0, 1], [1, 0], [0, -1]]) {
            let newRow = row + nextStep[0];
            let newCol = col + nextStep[1];
            if (newRow < 0 || newRow >= rowNum || newCol < 0 || newCol >= colNum) {
                continue;
            }
            const newLetter = board[newRow][newCol];
            if (!currNode.get(newLetter)) {
                continue;
            }
            backtracking(newRow, newCol, currNode);
        }

        board[row][col] = letter;

        if (!currNode) {
            parent.delete(letter);
        }
    }

    for (let i = 0; i < board.length; i++) {
        let row = board[i];
        for (let j = 0; j < row.length; j++) {
            let letter = row[j];
            if (trie.get(letter)) {
                backtracking(i, j, trie);
            }
        }
    }

    return matchedWords;
}