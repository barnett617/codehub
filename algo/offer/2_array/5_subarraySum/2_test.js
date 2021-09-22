function subarraySum(nums, k) {
  // 1.创建字典记录前i个数之和出现的次数
  const sumToCount = new Map();
  sumToCount.set(0, 1);
  // 2.创建和变量
  let sum = 0;
  // 3.计数变量
  let count = 0;
  // 4.遍历每个数
  for (const num of nums) {
    // 5.累加每个数
    sum += num;
    // 6.如果当前和减去k存在于字典，则累加计数
    count += getOrDefault(sumToCount, sum - k, 0);
    // 7.否则将新的累加和存入字典
    sumToCount.set(sum, getOrDefault(sumToCount, sum, 0) + 1);
  }
  // 8.返回计数
  return count;

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
      k: 1,
      expect: 3
    },
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