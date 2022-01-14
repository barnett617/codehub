const { calc } = require('../../../utils/testRunner')
// const solution = require('./practice1')
// const solution = require('./practice2.js')
// const solution = require('./practice3.js')
// const solution = require('./practice4.js')
const solution = require('./practice5.js')

const testcase = [
  {
    input: [38,27,43,3,9,82,10],
    expect: [3,9,10,27,38,43,82]
  },
  {
    input: [12, 11, 13, 5, 6, 7],
    expect: [5, 6, 7, 11, 12, 13]
  },
]

calc(testcase, solution)