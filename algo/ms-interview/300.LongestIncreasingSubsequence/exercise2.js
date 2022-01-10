var lengthOfLIS = function(nums) {
  const sub = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    if (cur > sub[sub.length - 1]) {
      sub.push(cur);
    } else {
      let j = 0;
      while (cur > sub[j]) {
        j++;
      }
      sub[j] = cur;
    }
  }
  return sub.length;
}

module.exports = lengthOfLIS;