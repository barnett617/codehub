function addBinary(a, b) {
  const result = [];
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0) {
    let digit_a = i >= 0 ? a.charAt(i--) - '0' : 0;
    let digit_b = j >= 0 ? b.charAt(j--) - '0' : 0;
    let sum = digit_a + digit_b + carry;
    carry = sum >= 2 ? 1 : 0;
    sum = sum >= 2 ? sum - 2 : sum;
    result.unshift(sum);
  }
  if (carry === 1) {
    result.unshift(1);
  }
  return result.join('');
}

(function () {
  console.time('calc');
  const testcase = [
    { a: '11', b: '10' },
    { a: '1010', b: '1011' },
    { a: '101010101010', b: '101110111011' },
  ]
  const result = [];
  testcase.forEach(test => {
    const { a, b } = test;
    result.push({
      input: test,
      output: addBinary(a, b)
    })
  })
  console.timeEnd('calc');
  console.table(result);
})()