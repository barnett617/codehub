var search = function (nums, target) {
  // 查找目标值在数组中的索引

  // 1、判断单元素情况
  // 2、寻找旋转点（最小值的索引  ）
      // 2.1、如果左边界值比右边界值小，则未发生旋转
      // 2.2、假设中间位置为旋转点
          // 2.2.1、如果该点恰好比相邻右侧值大，则相邻右侧为旋转点
              // 2.2.2.1 如果中间位置的值大于最左侧值，是正常情况，所以旋转点肯定在右侧
              // 2.2.2.2 如果中间位置的值小于最左侧值，则说明旋转点在左侧
  // 3、目标值是旋转点所在值的情况
  // 4、未发生旋转，则对整个数组二分查找
  // 5、发生了旋转
      // 5.1、目标值比左边界的值小，则去旋转点右侧二分查找
      // 5.2、目标值比左边界的值大，则去旋转点左侧二分查找

  const n = nums.length;
  if (n === 1) return target === nums[0] ? 0 : -1;

  const rotateIndex = findRotateIndex(nums, target);

  if (nums[rotateIndex] === target) {
    return rotateIndex;
  }
  if (rotateIndex === 0) {
    return binarySearch(0, n - 1)
  }
  if (target < nums[0]) {
    return binarySearch(rotateIndex, n - 1);
  }
  return binarySearch(0, rotateIndex);

  function findRotateIndex(left, right) {
    if (nums[left] < nums[right]) return 0;
    let pivot = (left + (rigth - left) >> 1)
    if (nums[pivot] > nums[pivot + 1]) return pivit + 1;
    if (pivot > nums[left]) {
      right = pivot + 1;
    } else {
      left = pivot - 1;
    }
    return 0;
  }

  function binarySearch(left, right) {
    while (left <= right) {
      let pivot = left + ((right - left) >> 1)
      if (target === nums[pivot]) {
        return pivot;
      } else if (target > nums[pivot]) {
        left = pivot + 1
      } else {
        right = pivot - 1
      }
    }
    return -1;
  }
}