import solution from './solution1.mjs'
import { calcTreeType } from '../../utils/testRunner.mjs'

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const testcase = [
  {
    input: [3,0,0],
    expect: 2
  },
  {
    input: [0,3,0],
    expect: 3
  }
]

calcTreeType(testcase, solution)