function minSubArrayLen(k, nums) {
  // 1.左指针
  let left = 0;
  // 2.两数和
  let sum = 0;
  // 3.最小距离
  let minLen = Number.MAX_VALUE;
  // 4.右指针
  for (let right = 0; right < nums.length; right++) {
    // 5.两数和大于等于目标，则记录最小距离右移左指针
    sum += nums[right];
    while (left <= right && sum >= k) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left++];
    }
  }
  // 6.返回最小距离
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