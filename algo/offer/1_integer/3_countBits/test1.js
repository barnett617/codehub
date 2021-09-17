function countBits(num) {
  let result = new Array(num + 1).fill(0);
  for (let i = 0; i <= num; i++) {
    let j = i;
    while (j !== 0) {
      result[i]++;
      j = j & (j - 1);
    }
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

function countBits2(num) {
  let result = new Array(num + 1).fill(0);
  for (let i = 1; i <= num; i++) {
    // i & (i - 1) 将 i 最右边的1变成0 => i的1个数比 i&(i-1)的1个数多1 
    result[i] = result[i & (i - 1)] + 1;
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
      output: countBits2(test)
    })
  })
  console.timeEnd('calc');
  console.log(result);
})()

function countBits3(num) {
  let result = new Array(num + 1).fill(0);
  for (let i = 1; i <= num; i++) {
    // i / 2 + i % 2
    // 偶数：等于 i/2 中1的个数
    // 奇数：等于 i/2 中1的个数加一
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
      output: countBits3(test)
    })
  })
  console.timeEnd('calc');
  console.log(result);
})()