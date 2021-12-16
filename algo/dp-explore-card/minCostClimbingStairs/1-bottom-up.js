/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const minCost = new Array(cost.length + 1).fill(0);

  for (let i = 2; i < minCost.length; i++) {
    // 对于二者任意一种，要看那一步和那一步前面的最优值之和
    const takeOne = cost[i - 1] + minCost[i - 1];
    const takeTwo = cost[i - 2] + minCost[i - 2];
    // 某一个位置，取前面两种情况（一步 or 两步）更小的
    minCost[i] = Math.min(takeOne, takeTwo);
  }

  return minCost[minCost.length - 1];
};

module.exports = minCostClimbingStairs

// [0,1,2,3,4,5]
// 4 -> 2 -> 0
// 5 -> 3 -> 1