function calc(testcase, solution) {
  const output = [];
  testcase.forEach(test => {
    const ans = solution(test.input);
    output.push({
      input: dataFormatter(test.input),
      expect: dataFormatter(test.expect),
      output: dataFormatter(ans)
    })
  });
  console.table(output);
}

function dataFormatter(data) {
  if (Array.isArray(data) && data.length > 3) {
    return JSON.stringify(data);
  }
  return data;
}

module.exports = calc;