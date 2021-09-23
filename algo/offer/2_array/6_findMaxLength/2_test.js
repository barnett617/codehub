function findMaxLength(nums) {
  // 1.创建字典记录每种和出现的索引
  const map = new Map();
  map.set(0, -1);
  // 2.创建计算和
  let sum = 0;
  // 3.创建结果变量
  let result = 0;
  // 4.遍历每个数
  for (let i = 0; i < nums.length; i++) {
    // 5.计算和
    sum += nums[i] === 0 ? -1 : 1;
    // 6.如果和出现过，则求当前索引至上次上次出现位置的距离，并比较当前最大距离
    if (map.has(sum)) {
      result = Math.max(result, i - map.get(sum));
    } else {
      // 7.如果没出现过，则计入字段
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