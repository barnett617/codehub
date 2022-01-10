/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  function lengthOfLIS(nums) {
    const sub = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
      const cur = nums[i];
      if (cur > sub[sub.length - 1]) {
        sub.push(cur);
      } else {
        let i = binarySearch(sub, cur);
        sub[i] = cur;
      }
    }
    return sub.length;
  }
  function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;
    while (left < right) {
      mid = left + ((right - left) >> 1);
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
  
  envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    } else {
      return a[0] - b[0];
    }
  })
  const secondDim = new Array(envelopes.length);
  for (let i = 0; i < secondDim.length; i++) {
    secondDim[i] = envelopes[i][1];
  }
  return lengthOfLIS(secondDim);
};

module.exports = maxEnvelopes;