/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a, b) => a[1] - b[1]);
    const dp = new Array(pairs.length).fill(1);
    for (let i = 1; i < pairs.length; i++) {
      for (let j = 0; j < i; j++) {
        if (pairs[i][0] > pairs[j][1]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
    }
    return Math.max(...dp);
};

module.exports = findLongestChain;