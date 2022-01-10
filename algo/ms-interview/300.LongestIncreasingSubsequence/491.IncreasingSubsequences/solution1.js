/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  // const res = [];
  // helper([], 0, nums, res);
  // function helper(list, index, nums, res) {
  //   if (list.length > 1) {
  //     res.push(list);
  //   }
  //   const used = new Set();
  //   for (let i = index; i < nums.length; i++) {
  //     if (used.has(nums[i])) {
  //       continue;
  //     }
  //     if (!list.length || nums[i] >= list[list.length - 1]) {
  //       list.push(nums[i]);
  //       used.add(nums[i]);
  //       helper(list, i + 1, nums, res);
  //       list.pop();
  //     }
  //   }
  // }
  // return res;
};

module.exports = findSubsequences;