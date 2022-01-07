const solution1 = require('./solution3.js')
const { calcOperateType } = require('../../utils/testRunner')

const testcase = [
  // {
  //   input:
  //   [
  //     ["MyCircularQueue","enQueue","enQueue","enQueue","enQueue","Rear","isFull","deQueue","enQueue","Rear"],
  //     [[3],[1],[2],[3],[4],[],[],[],[4],[]]
  //   ],
  //   expect: [null,true,true,true,false,3,true,true,true,4]
  // },
  {
    input:
    [
      ["MyCircularQueue","enQueue","enQueue","enQueue","enQueue","deQueue","deQueue","isEmpty","isEmpty","Rear","Rear","deQueue"],
      [[8],[3],[9],[5],[0],[],[],[],[],[],[],[]]
    ],
    expect: [null,true,true,true,true,true,true,false,false,0,0,true]
  }
]

calcOperateType(testcase, solution1);

// ┌─────────┬──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ (index) │                                                                      Values                                                                      │
// ├─────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │  input  │ '[["MyCircularQueue","enQueue","enQueue","enQueue","enQueue","Rear","isFull","deQueue","enQueue","Rear"],[[3],[1],[2],[3],[4],[],[],[],[4],[]]]' │
// │ expect  │                                                 '[null,true,true,true,false,3,true,true,true,4]'                                                 │
// │ output  │                                                 '[null,true,true,true,false,3,true,true,true,4]'                                                 │
// └─────────┴──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘