/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let diff = Infinity
  const len = nums.length
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len && diff !== 0; i++) {
    let lo = i + 1
    let hi = len - 1
    while (lo < hi) {
      const sum = nums[i] + nums[lo] + nums[hi]
      if (Math.abs(target - sum) < Math.abs(diff)) {
        diff = target - sum
      }
      if (sum < target) {
        ++lo
      } else {
        --hi
      }
    }
  }
  return target - diff
};

console.log(threeSumClosest([-1,2,1,-4], 1))
console.log(threeSumClosest([-6,-3,-1,2,3,5], 0))