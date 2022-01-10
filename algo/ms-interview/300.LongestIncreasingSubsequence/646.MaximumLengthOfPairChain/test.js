const { calc } = require('../../../utils/testRunner')
const solution = require('./solution1.js')

const testcase = [
  {
    input: [[1,2],[2,3],[3,4]],
    expect: 2
  },
  {
    input: [[1,2],[7,8],[4,5]],
    expect: 3
  }
]

calc(testcase, solution)