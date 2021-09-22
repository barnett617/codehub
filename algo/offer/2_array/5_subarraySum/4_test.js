function subarraySum(nums, k) {
  const map = new Map();
  map.set(0, 1);
  let sum = 0;
  let result = 0;
  for (const num of nums) {
    sum += num;
    result += getOrDefault(map, sum - k, 0);
    map.set(sum, getOrDefault(map, sum, 0) + 1);
  }
  return result;
  function getOrDefault(map, key, val) {
    const exist = map.get(key);
    if (exist) return exist;
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