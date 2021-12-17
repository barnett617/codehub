const calc = require('../../utils/testRunner')
const solution1 = require('./solution1')

const testcase = [
  {
    input: [[0,30],[5,10],[15,20]],
    expect: 2
  },
  {
    input: [[7,10],[2,4]],
    expect: 1
  }
]

calc(testcase, solution1)