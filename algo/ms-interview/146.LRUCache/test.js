const { calcOperateType } = require('../../utils/testRunner')
// const solution = require('./solution1.js')
const solution = require('./exercise1-1.js')

const testcase = [
  {
    input: [
      ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"],
      [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]],
    ],
    expect: [null, null, null, 1, null, -1, null, -1, 3, 4]
  }
]

calcOperateType(testcase, solution)