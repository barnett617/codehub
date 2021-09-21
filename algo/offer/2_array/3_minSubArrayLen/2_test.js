function minSubArrayLen(k, nums) {
  // 1.创建左指针
  let left = 0;
  // 2.创建两数和
  let sum = 0;
  // 3.创建最小长度
  let minLen = Number.MAX_VALUE;
  // 4.当两数之和小于目标时，右移右指针，放大两数和
  for (let right = 0; right < nums.length; right++) {
    // 5.计算两数和
    sum += nums[right];
    // 6.两数之和大于等于目标时，记录最小距离，并左移左指针继续试探
    while (left <= right && sum >= k) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left++];
    }
  }
  // 7.有最小距离则返回最小距离
  return minLen === Number.MAX_VALUE ? 0 : minLen;
}

(function () {
  const testcase = [
    {
      target: 7,
      nums: [5,1,4,3],
      expect: 2
    },
    {
      target: 7,
      nums: [2,3,1,2,4,3],
      expect: 2
    },
    {
      target: 4, 
      nums: [1,4,4],
      expect: 1
    },
    {
      target: 11,
      nums: [1,1,1,1,1,1,1,1],
      expect: 0
    }
  ]
  const result = [];
  console.time('calc');
  testcase.forEach(test => {
    result.push({
      input: JSON.stringify([test.target, test.nums]),
      expect: test.expect,
      output: minSubArrayLen(test.target, test.nums)
    })
  })
  console.timeEnd('calc');
  console.table(result);
})()