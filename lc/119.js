/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
  let ans = [1];
  for (let i = 1; i <= rowIndex; i++) {
      for (let j = i; j > 0; j--) {
          if (j === i) {
              ans[j] = 1;
          } else {
              ans[j] = ans[j - 1] + ans[j];
          }
      }
  }
  return ans;
};