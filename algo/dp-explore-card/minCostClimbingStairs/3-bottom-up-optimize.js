/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let downOne = 0;
  let downTwo = 0;
  for (let i = 2; i < cost.length + 1; i++) {
    const temp = downOne;
    downOne = Math.min(downOne + cost[i - 1], downTwo + cost[i - 2]);
    downTwo = temp;
  }
  return downOne;
};

module.exports = minCostClimbingStairs;