// 方法1：对每个数利用 i & (i-1) 计算1的个数
// 方法2：i & (i-1) 将i最右边的1变成0
// 方法3：偶数i和i/2中1的个数相同，奇数i是i/2中1的个数加一

function countBits(num) {
  let result = new Array(num + 1).fill(0);

  // for (let i = 0; i <= num; i++) {
  //   j = i;
  //   while (j !== 0) {
  //     result[i]++;
  //     j = j & (j - 1);
  //   }
  // }

  // for (let i = 1; i <= num; i++) {
  //   result[i] = result[i & (i - 1)] + 1;
  // }

  for (let i = 1; i <= num; i++) {
    result[i] = result[i >> 1] + (i & 1);
  }

  return result;
}

(function () {
  const testcase = [2, 5];
  const result = [];
  console.time('calc');
  testcase.forEach(test => {
    result.push({
      input: test,
      output: countBits(test)
    })
  })
  console.timeEnd('calc');
  console.log(result);
})()