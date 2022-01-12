/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const ans = [];
  for (const interval of intervals) {
    if (!ans.length || ans[ans.length - 1][1] < interval[0]) {
      ans.push(interval);
    } else {
      ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], interval[1])
    }
  }
  return ans;
};

module.exports = merge;