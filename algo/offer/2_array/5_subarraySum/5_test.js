function subarraySum(nums, k) {
  // 1.创建字典记录和出现的次数并初始化
  const map = new Map();
  map.set(0, 1);
  // 2.创建计数和
  let sum = 0;
  // 3.创建结果变量
  let result = 0;
  // 4.遍历每个数
  for (const num of nums) {
    // 5.计算累加和
    sum += num;
    // 6.判断当前和减去目标值是否出现过，如果出现过则表示存在子数组符合条件
    result += getOrDefault(map, sum - k, 0);
    // 7.将本次累加和存入字典
    map.set(sum, getOrDefault(map, sum, 0) + 1);
  }
  // 8.返回结果
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