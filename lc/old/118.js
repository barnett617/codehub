/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  let ans = [[1]];
  for (let i = 1; i < numRows; i++) {
      let layer = [];
      for (let j = 0; j < i + 1; j++) {
          let curVal = 1;
          if (
              ans[i - 1] !== undefined 
              && ans[i - 1][j] !== undefined 
              && ans[i - 1][j - 1] !== undefined
             ) {
              curVal = ans[i - 1][j] + ans[i - 1][j - 1];
          }
          layer.push(curVal);
      }
      ans.push(layer);
  }
  return ans;
};