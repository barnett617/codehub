/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    
  const memo = new Map();

  function dp(i, cost) {
    if (i < 2) return 0;

    if (!memo.has(i)) {
      const downOne = cost[i - 1] + dp(i - 1, cost);
      const downTwo = cost[i - 2] + dp(i - 2, cost);
      memo.set(i, Math.min(downOne, downTwo));
    }
    return memo.get(i);
  }

  return dp(cost.length, cost);
};

module.exports = minCostClimbingStairs