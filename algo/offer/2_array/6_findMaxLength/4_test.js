function findMaxLength(nums) {
  // 1.创建字典并初始化和为0的索引为-1
  const map = new Map();
  map.set(0, -1);
  // 2.创建和变量
  let sum = 0;
  // 3.创建结果
  let result = 0;
  // 4.遍历数组
  for (let i = 0; i < nums.length; i++) {
    // 5.如果当前值为0则-1，否则+1
    sum += nums[i] === 0 ? -1 : 1;
    // 6.如果计数和出现过，则计算当前索引距离上一次出现的索引之间的距离
    if (map.has(sum)) {
      result = Math.max(result, i - map.get(sum));
    } else {
      // 7.如果没出现则记录当前和的索引
      map.set(sum, i);
    }
  }
  // 8.返回结果
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