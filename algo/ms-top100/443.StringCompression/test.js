const executor = require('../../utils/testRunner')
const solution1 = require('./solution1.js')

const testcase = [
  {
    input: ["a","a","b","b","c","c","c"],
    expect: 6
  },
  {
    input: ["a"],
    expect: 1
  },
  {
    input: ["a","b","b","b","b","b","b","b","b","b","b","b","b"],
    expect: 4
  },
  {
    input: ["a","a","a","b","b","a","a"],
    expect: 6
  },
  {
    input: ["a","a","a","b","a","a"],
    expect: 6
  },
]

executor(testcase, solution1)