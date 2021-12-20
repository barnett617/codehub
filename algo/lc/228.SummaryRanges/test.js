const executor = require('../../utils/testRunner')
const solution1 = require('./solution1.js')

const testcase = [
  {
    input: [0,1,2,4,5,7],
    expect: ["0->2","4->5","7"]
  },
  {
    input: [0,2,3,4,6,8,9],
    expect: ["0","2->4","6","8->9"]
  }
]

executor(testcase, solution1)