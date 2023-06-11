// 优化空间复杂度

function fib(n) {
  if (n === 1 || n === 2) {
    return 1
  }
  var prev = 1, curr = 1;
  for (var i = 3; i <= n; i++) {
    // 状态转移，当前值等于前两个值相加的和
    var sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr
}