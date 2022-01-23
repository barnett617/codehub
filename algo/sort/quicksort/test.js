const { calc } = require('../../utils/testRunner')
// const solution = require('./method1/practice1')
const solution = require('./method2/practice1')

const testcase = [
  {
    input: [10,80,30,90,40,50,70],
    expect: [10,30,40,50,70,80,90]
  }
]

calc(testcase, solution)