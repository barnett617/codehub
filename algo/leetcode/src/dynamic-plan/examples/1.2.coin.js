function coin(coins, amount) {
  var memo = {}
  function dp(n) {
    if (memo[n] !== undefined) return memo[n]
    // base case
    if (n === 0) return 0
    if (n < 0) return -1
    // 求最小，初始化为正无穷
    var res = Infinity
    for (const coin of coins) {
      var subproblem = dp(n - coin)
      if (subproblem === -1) continue
      res = Math.min(res, subproblem + 1)
    }
    var result = res !== Infinity ? res : -1
    memo[n] = result
    return result
  }
  return dp(amount)
}

console.log(coin([1, 2, 5], 11))

// 时间 O(kn)