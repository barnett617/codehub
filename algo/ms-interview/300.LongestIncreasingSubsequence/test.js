const { calc } = require('../../utils/testRunner')
// const solution = require('./solution1.js')
// const solution = require('./solution2.js')
// const solution = require('./exercise2.js')
const solution = require('./solution3.js')

const testcase = [
  {
    input: [10,9,2,5,3,7,101,18],
    expect: 4
  },
  {
    input: [0,1,0,3,2,3],
    expect: 4
  },
  {
    input: [7,7,7,7,7,7,7],
    expect: 1
  }
]

calc(testcase, solution);