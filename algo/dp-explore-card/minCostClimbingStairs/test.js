const bottomUp = require('./1-bottom-up')
const topDown = require('./2-top-down')
const bottomUpOptimize = require('./3-bottom-up-optimize')

const testcase = [
  {
    input: [10,15,20],
    expect: 15
  },
  {
    input: [1,100,1,1,1,100,1,1,100,1],
    expect: 6
  }
]

function calc(solution) {
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

calc(bottomUp);
calc(topDown);
calc(bottomUpOptimize);
