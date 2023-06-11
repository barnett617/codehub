var out = console.log

function fib(n) {
    if (n < 1) return 0
    var memo = {}
    return helper(memo, n)
}

function helper(memo, n) {
    if (n === 1 || n === 2) return 1
    if (memo[n] !== undefined) return memo[n]
    memo[n] = helper(memo, n - 1) + helper(memo, n - 2)
    return memo[n]
}

out(fib(5))

// 时间：O(n)

// 自顶向下