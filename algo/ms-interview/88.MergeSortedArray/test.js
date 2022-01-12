// const solution = require('./solution1.js')
// const solution = require('./exercise1-1.js')
const solution = require('./solution2.js')

const testcase = [
  {
    input: {
      nums1: [1,2,3,0,0,0],
      m: 3,
      nums2: [2,5,6],
      n: 3
    },
    expect: [1,2,2,3,5,6]
  },
  {
    input: {
      nums1: [1], 
      m: 1, 
      nums2: [], 
      n: 0
    },
    expect: [1]
  },
  {
    input: {
      nums1: [0], 
      m: 0, 
      nums2: [1], 
      n: 1
    },
    expect: [1]
  }
]

function calc(testcase, solution) {
  const output = []
  testcase.forEach(test => {
    const input = Object.values(test.input)
    const result = solution(...input);
    output.push({
      input: JSON.stringify(test.input),
      expect: JSON.stringify(test.expect),
      output: JSON.stringify(result)
    })
  })
  console.table(output)
}

calc(testcase, solution)