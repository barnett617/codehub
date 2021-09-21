function minSubArrayLen(k, nums) {
  // 1.创建左指针
  let left = 0;
  // 2.创建两数和
  let sum = 0;
  // 3.创建最小距离
  let minLen = Number.MAX_VALUE;
  // 4.遍历右指针
  for (let right = 0; right < nums.length; right++) {
    // 5.计算两数和
    sum += nums[right];
    // 6.如果两数和大于等于目标，则记录最小距离并右移左指针
    while (left <= right && sum >= k) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left++];
    }
  }
  // 7.有最小距离则返回
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