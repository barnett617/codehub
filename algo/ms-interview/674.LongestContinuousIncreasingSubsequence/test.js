const { calc } = require('../../utils/testRunner')
const solution = require('./solution1.js')

const testcase = [
  {
    input: [1,3,5,4,7],
    expect: 3
  },
  {
    input: [2,2,2,2,2],
    expect: 1
  }
]

calc(testcase, solution)