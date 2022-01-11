/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = 0, end = nums.length - 1;
  while (start <= end) {
    let mid = start + ((end - start) >> 1);
    if (target === nums[mid]) return mid;
    // 1 2 3 4 5
    else if (nums[mid] >= nums[start]) {
      // 1 [2] 3 4 5
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1;
      } else {
        // 1 2 3 [4] 5
        start = mid + 1;
      }
    } else {
      // 4 5 1 2 3
      if (target <= nums[end] && target > nums[mid]) {
        // 4 5 1 [2] 3
        start = mid + 1;
      } else {
        // [4] 5 1 2 3
        end = mid - 1;
      }
    }
    return -1;
  }
}