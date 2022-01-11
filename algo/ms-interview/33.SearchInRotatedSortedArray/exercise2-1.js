var search = function (nums, target) {
  // 1、定义二分查找左右边界
  // 2、判断条件为左边界小于等于右边界
  // 3、求中间位置
  // 4、如果中间位置值等于目标值则返回
  // 5、如果中间值大于左边界值，则说明左边界至中间值处未发生旋转，
  //    那么在未旋转区域按照正常二分方式缩小区间，否则缩小另一侧区间
  // 6、如果中间值小于左边界值，则说明左边界至中间值处存在旋转
  //    同样也在未旋转区域按照正常二分方式缩小区间，否则缩小另一侧

  let start = 0, end = nums.length - 1;
  while (start <= end) {
    let mid = start + ((right - start) >> 1)
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] >= nums[start]) {
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target <= nums[end] && target > nums[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}