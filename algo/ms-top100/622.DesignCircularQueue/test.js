const solution1 = require('./solution1.js')
const { calcOperateType } = require('../../utils/testRunner')

const testcase = [
  {
    input:
    [
      ["MyCircularQueue","enQueue","enQueue","enQueue","enQueue","Rear","isFull","deQueue","enQueue","Rear"],
      [[3],[1],[2],[3],[4],[],[],[],[4],[]]
    ],
    expect: [null,true,true,true,false,3,true,true,true,4]
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