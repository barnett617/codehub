const { calc } = require('../../../utils/testRunner')
const solution = require('./solution1.js')

const testcase = [
  {
    input: [4,6,7,7],
    expect: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
  },
  {
    input: [4,4,3,2,1],
    expect: [[4,4]]
  }
]

calc(testcase, solution);