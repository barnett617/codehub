function calc(testcase, solution) {
  const output = [];
  testcase.forEach(test => {
    const ans = solution(test.input);
    output.push({
      input: JSON.stringify(test.input),
      expect: test.expect,
      output: ans
    })
  });
  console.table(output);
}

module.exports = calc;