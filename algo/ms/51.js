/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
  
    const board = Array(n).fill('.');
    for (let i = 0; i < board.length; i++) {
      board[i] = Array(n).fill('.');
    }
    
    const solutions = [];
    
    backtrack(0, new Set(), new Set(), new Set(), board);
    
    function createBoard(state) {
      const board = [];
      for (let row = 0; row < n; row++) {
        const cur_row = state[row];
        board.push(cur_row.join(''));
      }
      return board;
    }
    
    function backtrack(row, diagonals, antiDiagonals, cols, state) {
      if (row === n) {
        solutions.push(createBoard(state));
        return;
      }
      
      for (let col = 0; col < n; col++) {
        let curDiagonal = row - col;
        let curAntiDiagonal = row + col;
        // If the queen is not placeable
        if (cols.has(col) || diagonals.has(curDiagonal) || antiDiagonals.has(curAntiDiagonal)) {
          continue;
        }
        
        // 'Add' the queen to the board
        cols.add(col);
        diagonals.add(curDiagonal);
        antiDiagonals.add(curAntiDiagonal);
        state[row][col] = 'Q';
        
        // Move on to the next row with the updated board state
        backtrack(row + 1, diagonals, antiDiagonals, cols, state);
        
        // 'Remove' the queen from the board since we have already
        // explored all valid paths using the above function call
        cols.delete(col);
        diagonals.delete(curDiagonal);
        antiDiagonals.delete(curAntiDiagonal);
        state[row][col] = '.';
      }
    }
    
    return solutions;
    
  };