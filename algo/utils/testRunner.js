function calc(testcase, solution, forceFormat) {
  const output = [];
  testcase.forEach(test => {
    const ans = solution(test.input);
    output.push({
      input: dataFormatter(test.input, forceFormat),
      expect: dataFormatter(test.expect),
      output: dataFormatter(ans)
    })
  });
  console.table(output);
}

function calcOperateType(testcase, solution) {
  const output = {};
  testcase.forEach(test => {
    const [operator, val] = test.input;
    let instance;
    const result = [];
    operator.forEach((op, index) => {
      if (op === solution.name) {
        instance = new solution(...val[index]);
        result.push(null);
      } else {
        const ans = instance[op](...val[index]);
        result.push(ans === undefined ? null : ans);
      }
    })
    output.input = dataFormatter(test.input, true);
    output.expect = dataFormatter(test.expect, true);
    output.output = dataFormatter(result, true);
  })
  console.table(output);
}

function dataFormatter(data, forceStringify = false) {
  const arrayDataTooMuch = Array.isArray(data) && data.length > 3;
  if (forceStringify || arrayDataTooMuch) {
    return JSON.stringify(data);
  }
  return data;
}

module.exports = {
  calc,
  calcOperateType
}