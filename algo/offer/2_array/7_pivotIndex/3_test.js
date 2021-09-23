function pivotIndex(nums) {
  let total = 0;
  let sum = 0;
  for (const num of nums) total += num;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (total - sum === sum - nums[i]) return i;
  }
  return -1
}

(function () {
  const testcase = [
    {
      nums:  [1,7,3,6,5,6],
      expect: 3
    },
    {
      nums: [1,2,3],
      expect: -1
    },
    {
      nums: [2,1,-1],
      expect: 0
    }
  ]
  const result = [];
  console.time('calc');
  testcase.forEach(test => {
    result.push({
      input: JSON.stringify([test.nums, test.expect]),
      expect: test.expect,
      output: pivotIndex(test.nums)
    })
  })
  console.timeEnd('calc');
  console.table(result);
})()