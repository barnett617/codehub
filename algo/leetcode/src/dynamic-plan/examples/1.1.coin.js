/**
 * 凑零钱
 * 给k种面值的硬币，每种硬币数量无限
 * 给一个总金额
 * 至少需要几枚硬币凑出目标总金额
 * 如果凑不出则返回 -1
 * @param {*} coins 可选硬币面值
 * @param {*} amount 目标金额
 * 
 * 问题具有最优子结构->子问题必须相互独立
 * 每个子问题可以有最优解法，硬币数量无限，所以子问题之间相互独立，不互相制约
 */

function coin(coins, amount) {
  function dp(n) {
    // base case
    if (n === 0) return 0
    if (n < 0) return -1
    // 求最小值，所以初始化为正无穷
    var res = Infinity
    for (const coin of coins) {
      // 子问题就是减去当前硬币的剩余
      var subproblem = dp(n - coin)
      // 如果子问题无解，则排除
      if (subproblem === -1) continue
      res = Math.min(res, 1 + subproblem)
    }
    return res !== Infinity ? res : -1
  }
  return dp(amount)
}

console.log(coin([1, 2, 5], 11))

// 时间：O(k*n^k)