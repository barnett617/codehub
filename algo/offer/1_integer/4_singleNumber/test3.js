function singleNumber(nums) {
  // 1.创建存储每一位的数组
  let bitSums = new Array(64).fill(0);
  // 2.遍历每个数
  for (const num of nums) {
    // 3.遍历每一位
    for (let i = 0; i < 64; i++) {
      // 4.计算每一位的值
      bitSums[i] += (num >> (63 - i)) & 1;
    }
  }
  // 5.声明结果变量
  let result = 0;
  // 6.遍历每一位
  for (let i = 0; i < 64; i++) {
    // 7.余3的值记录
    result = (result << 1) + bitSums[i] % 3;
  }
  return result;
}

(function () {
  const testcase = [
    [2, 2, 3, 2],
    [0, 1, 0, 1, 0, 1, 101],
  ];
  const result = [];
  console.time('calc');
  testcase.forEach(test => {
    result.push({
      input: test,
      output: singleNumber(test)
    })
  })
  console.timeEnd('calc');
  console.log(result);
})()