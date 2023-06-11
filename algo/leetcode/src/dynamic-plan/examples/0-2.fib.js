// 动态规划
// 自底向上，脱离递归，使用迭代
// 从 f(1) f(2) 开始往上推，知道推到想要的答案

// dp数组的迭代解法

// 见bottom-to-top.webp

var out = console.log

function fib(n) {
  var map = {}
  map[1] = 1
  map[2] = 1
  for (var i = 3; i <= n; i++) {
    map[i] = map[i - 1] + map[i - 2]
  }
  return map[n]
}

out(fib(4))