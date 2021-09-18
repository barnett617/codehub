function singleNumber(nums) {
  let bitSums = new Array(64).fill(0);
  for (const num of nums) {
    for (let i = 0; i < 64; i++) {
      bitSums[i] += (num >> (63 - i)) & 1;
    }
  }
  let result = 0;
  for (let i = 0; i < 64; i++) {
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