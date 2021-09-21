function numSubarrayProductLessThanK(nums, k) {
  let product = 1;
  let left = 0;
  let count = 0;
  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];
    while (left <= right && product >= k) {
      product /= nums[left++];
    }
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