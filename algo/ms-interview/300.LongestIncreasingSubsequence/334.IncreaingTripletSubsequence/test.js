const { calc } = require('../../../utils/testRunner')
const solution = require('./solution1.js')

const testcase = [
  {
    input: [1,2,3,4,5],
    expect: true
  },
  {
    input: [5,4,3,2,1],
    expect: false
  },
  {
    input: [2,1,5,0,4,6],
    expect: true
  }
]

calc(testcase, solution)