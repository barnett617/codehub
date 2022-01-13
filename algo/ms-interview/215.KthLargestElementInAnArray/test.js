const { calc } = require('../../utils/testRunner')
const solution = require('./solution1.js')

const testcase = [
  {
    input: {
      nums: [3,2,1,5,6,4], k: 2
    },
    expect: 5
  },
  {
    input: {
      nums: [3,2,3,1,2,4,5,5,6], k: 4
    },
    expect: 4
  }
]

calc(testcase, solution, true)