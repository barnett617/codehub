const { calc } = require('../../../utils/testRunner')
const solution = require('./solution1.js')

const testcase = [
  {
    input: [[5,4],[6,4],[6,7],[2,3]],
    expect: 3
  },
  {
    input: [[1,1],[1,1],[1,1]],
    expect: 1
  },
  {
    input: [[30,50],[12,2],[3,4],[12,15]],
    expect: 3
  }
]

calc(testcase, solution, true)