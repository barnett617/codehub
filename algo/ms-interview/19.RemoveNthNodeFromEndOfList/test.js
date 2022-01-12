const solution = require('./solution1.js')

const testcase = [
  {
    input: {
      head: [1,2,3,4,5],
      n: 2
    },
    expect: [1,2,3,5]
  },
  {
    input: {
      head: [1],
      n: 1
    },
    expect: []
  }
  {
    input: {
      head: [1,2],
      n: 1
    },
    expect: [1]
  }
]
