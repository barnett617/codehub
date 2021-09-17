function countBits(num) {
  let result = new Array(num + 1).fill(0);

  // for (let i = 0; i <= num; i++) {
  //   let j = i;
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