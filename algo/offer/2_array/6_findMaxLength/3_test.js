function findMaxLength(nums) {
  const map = new Map();
  map.set(0, -1);
  let sum = 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 0 ? -1 : 1;
    if (map.has(sum)) {
      result = Math.max(result, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return result;
}

(function () {
  const testcase = [
    {
      nums: [0, 1],
      expect: 2
    },
    {
      nums: [0, 1, 0],
      expect: 2
    }
  ]
  const result = [];
  console.time('calc');
  testcase.forEach(test => {
    result.push({
      input: JSON.stringify([test.nums, test.expect]),
      expect: test.expect,
      output: findMaxLength(test.nums)
    })
  })
  console.timeEnd('calc');
  console.table(result);
})()