/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 1) return target === nums[0] ? 0 : -1;

  const rotate_index = findRotateIndex(0, nums.length - 1);
  if (nums[rotate_index] === target) {
    return rotate_index;
  }
  if (rotate_index === 0) {
    return binarySearch(0, nums.length - 1);
  }
  // 3 4 5 [1] 2
  if (target < nums[0]) {
    return binarySearch(rotate_index, nums.length - 1)
  }
  // 3 [4] 5 1 2
  return binarySearch(0, rotate_index);

  function binarySearch(left, right) {
    while (left <= right) {
      let pivot = left + ((right - left) >> 1)
      if (target === nums[pivot]) {
        return pivot;
      } else if (target < nums[pivot]) {
        right = pivot - 1;
      } else {
        left = pivot + 1;
      }
    }
    return -1;
  }

  function findRotateIndex(left, right) {
    if (nums[left] < nums[right]) {
      return 0;
    }
    while (left <= right) {
      let pivot = left + ((right - left) >> 1);
      if (nums[pivot] > nums[pivot + 1]) {
        return pivot + 1;
      } else {
        if (nums[pivot] < nums[left]) {
          right = pivot - 1;
        } else {
          left = pivot + 1;
        }
      }
    }
    return 0;
  }
};

module.exports = search;