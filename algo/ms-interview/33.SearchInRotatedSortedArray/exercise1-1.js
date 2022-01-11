var search = function(nums, target) {
  if (nums.length === 1) return target === nums[0] ? 0 : -1;

  const n = nums.length;
  const rotate_index = findRotateIndex(0, n - 1);

  if (nums[rotate_index] === target) {
    return rotate_index;
  }
  if (rotate_index === 0) {
    return binarySearch(0, n - 1);
  }
  // 4 5 [1] 2 3
  if (target < nums[0]) {
    return binarySearch(rotate_index, n - 1);
  }
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

  // find the index of the smallest element
  function findRotateIndex(left, right) {
    // 1 2 3 4 5
    // 2 3 4 5 1
    // 3 4 5 1 2
    // 只要发生过旋转，就不可能左边界元素小于右边界元素
    if (nums[left] < nums[right]) {
      return 0;
    }
    while (left <= right) {
      let pivot = left + ((right - left) >> 1);
      // 3 4 [5] [1] 2
      if (nums[pivot] > nums[pivot + 1]) {
        return pivot + 1;
      } else {
        // 4 5 [6] 1 2 3                                                                                                                                                                        
        if (nums[pivot] < nums[left]) {
          right = pivot - 1;
        } else {
          left = pivot + 1;
        }
      }
    }
    return 0;
  }
}