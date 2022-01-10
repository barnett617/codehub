var lengthOfLIS = function(nums) {
  const sub = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    if (num > sub[sub.length - 1]) {
      sub.push(num)
    } else {
      const j = binarySearch(sub, num);
      sub[j] = num;
    }
  }
  function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;
    while (left < right) {
      mid = left + ((right - left) >> 1);
      if (nums[mid] === target) return mid;
      if (target < nums[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
  return sub.length;
}

module.exports = lengthOfLIS;