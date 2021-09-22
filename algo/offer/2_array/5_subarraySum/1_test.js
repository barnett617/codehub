function subarraySum(nums, k) {
  const sumToCount = new Map();
  sumToCount.set(0, 1);
  let sum = 0;
  let count = 0;
  for (const num of nums) {
    sum += num;
    count += getOrDefault(sumToCount, sum - k, 0);
    sumToCount.set(sum, getOrDefault(sumToCount, sum, 0) + 1);
  }
  return count;
  function getOrDefault(map, key, val) {
    const value = map.get(key);
    if (value) return value;
    map.set(key, val);
    return val;
  }
}

(function () {
  const testcase = [
    {
      nums: [1,1,1], 
      k: 2,
      expect: 2
    },
    {
      nums: [1,2,3], 
      k: 3,
      expect: 2
    }
  ]
  const result = [];
  console.time('calc');
  testcase.forEach(test => {
    result.push({
      input: JSON.stringify([test.nums, test.k]),
      expect: test.expect,
      output: subarraySum(test.nums, test.k)
    })
  })
  console.timeEnd('calc');
  console.table(result);
})()