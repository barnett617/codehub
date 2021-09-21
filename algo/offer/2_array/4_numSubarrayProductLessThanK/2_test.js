function numSubarrayProductLessThanK(nums, k) {
  // 1.初始化乘积
  let prod = 1;
  // 2.创建左指针
  let left = 0;
  // 3.创建计数和
  let count = 0;
  // 4.遍历右指针
  for (let right = 0; right < nums.length; right++) {
    // 5.计算乘积
    prod *= nums[right];
    // 6.当乘积超出k，则右移左指针
    while (left <= right && prod >= k) {
      prod /= nums[left++];
    }
    // 7.对于每次符合条件的进行计数
    count += right >= left ? right - left + 1 : 0;
  }
  return count;
}

(function () {
  const testcase = [
    {
      nums: [10,5,2,6], 
      k: 100,
      expect: 8
    },
    {
      nums: [1,2,3], 
      k: 0,
      expect: 0
    }
  ]
  const result = [];
  console.time('calc');
  testcase.forEach(test => {
    result.push({
      input: JSON.stringify([test.nums, test.k]),
      expect: test.expect,
      output: numSubarrayProductLessThanK(test.nums, test.k)
    })
  })
  console.timeEnd('calc');
  console.table(result);
})()