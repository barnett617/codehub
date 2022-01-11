// const { calc } = require('../../utils/testRunner')
const solution = require('./solution1.js')

const testcase = [
  {
    input: {
      nums: [4,5,6,7,0,1,2],
      target: 0
    },
    expect: 4
  },
  {
    input: {
      nums: [4,5,6,7,0,1,2],
      target: 3
    },
    expect: -1
  },
  {
    input: {
      nums: [1], 
      target: 0
    },
    expect: -1
  }
]

function calc(testcase, solution) {
  const output = [];
  testcase.forEach(test => {
    const input = test.input;
    const result = solution(...Object.values(input));
    output.push({
      input: JSON.stringify(input),
      expect: test.expect,
      output: result
    })
  })
  console.table(output);
}

calc(testcase, solution)