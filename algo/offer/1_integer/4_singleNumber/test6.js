function singleNumber(nums, n) {
  let bitSums = new Array(64).fill(0);
  for (const num of nums) {
    for (let i = 0; i < 64; i++) {
      bitSums[i] += (num >> (63 - i)) & 1;
    }
  }
  let result = 0;
  for (let i = 0; i < 64; i++) {
    result = (result << 1) + bitSums[i] % n;
  }
  return result;
}

(function () {
  const testcase = [
    {
      nums: [2, 2, 3, 2],
      n: 3
    },
    {
      nums: [0, 1, 0, 1, 0, 1, 101],
      n: 3
    },
    {
      nums: [0, 0, 0, 0, 1, 1, 1, 1, 2],
      n: 4
    }
  ];
  const result = [];
  console.time('calc');
  testcase.forEach(test => {
    result.push({
      input: JSON.stringify(test),
      output: singleNumber(test.nums, test.n)
    })
  })
  console.timeEnd('calc');
  console.log(result);
})()