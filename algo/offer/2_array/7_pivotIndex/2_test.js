function pivotIndex(nums) {
  // 1.创建总和变量
  let total = 0;
  // 2.创建当前和变量
  let sum = 0;
  // 3.计算所有数总和
  for (const num of nums) {
    total += num;
  }
  // 4.遍历每个数计算当前和
  for (let i = 0; i < nums.length; i++) {
    // 5.如果某个索引前后的数相加和相等，则总和减去当前和则是当前索引后面所有数的和，当前和减去当前数则是当前数前面所有数的和
    sum += nums[i];
    if (total - sum === sum - nums[i]) {
      return i;
    }
  }
  return -1;
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