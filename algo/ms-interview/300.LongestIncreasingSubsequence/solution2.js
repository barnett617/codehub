var lengthOfLIS = function(nums) {
  const sub = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    if (cur > sub[sub.length - 1]) {
      sub.push(cur);
    } else {
      for (let j = 0; j < sub.length; j++) {
        if (sub[j] >= cur) {
          sub[j] = cur;
          break;
        }
      }
    }
  }
  return sub.length;
}

module.exports = lengthOfLIS;