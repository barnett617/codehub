/**
 * @param {number[]} nums
 * @return {number}
 */
 var arraySign = function(nums) {
  let oddNums = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) return 0;
      if (nums[i] < 0) ++oddNums;
  }
  return (oddNums % 2 === 0 ? 1 : -1)
};