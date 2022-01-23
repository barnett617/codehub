import TreeNode from './TreeNode.mjs'

function generateTree(arr) {
  const arrCopy = arr.slice();
  arrCopy.unshift(-1)
  function gen(arr, i) {
    if (i > arr.length - 1) return null;
    const newNode = new TreeNode(arr[i]);
    const left = gen(arr, i * 2);
    const right = gen(arr, i * 2 + 1);
    newNode.left = left;
    newNode.right = right;
    return newNode
  }
  return gen(arrCopy, 1)
}

function calcTreeType(testcase, solution) {
  const output = []
  testcase.forEach(test => {
    const input = test.input
    const root = generateTree(input)
    const res = solution(root)
    output.push({
      input: input,
      expect: test.expect,
      output: res
    })
  })
  console.table(output)
}

export {
  calcTreeType
}