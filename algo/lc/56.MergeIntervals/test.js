const { calc } = require('../../utils/testRunner')
const solution = require('./solution1.js')

const testcase = [
  {
    input: [[1,3],[2,6],[8,10],[15,18]],
    expect: [[1,6],[8,10],[15,18]]
  },
  {
    input: [[1,4],[4,5]],
    expect: [[1,5]]
  }
]

calc(testcase, solution, true)