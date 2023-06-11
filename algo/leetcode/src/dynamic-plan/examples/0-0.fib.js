// 斐波那契数列

// function fib(n) {
//     var ans;
//     if (n === 1 || n === 2) {
//         ans = 1
//         // console.log(ans, ' ')
//         return ans
//     } else {
//         ans = fib(n - 1) + fib(n - 2)
//         // console.log(ans, ' ')
//         return ans
//     }
//     // return fib(n - 1) + fib(n - 2)
// }

function fib(n) {
    if (n === 0 || n === 1) return 1
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(12))

// 144

// 时间：O(2^n)

