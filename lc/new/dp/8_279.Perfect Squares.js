// https://leetcode.com/problems/perfect-squares/

// 思路：因为目标为求第n个值，所以初始化n+1长度的数组，并将值都初始化为和目标数相同的值
// 当目标为0时，则需要0个因子，所以初始化索引0上的值为0
// 从小到大遍历每个子问题，直至最终问题
// 对于每个子问题，不断尝试小于等于当前值的因子，进行拆解，并在过程中不断记录当前问题的状态

// TIME: O(n)
// SPACE: O(n)

function numSquares(n) {
    const dp = Array(n + 1).fill(n);
    dp[0] = 0;
    for (let target = 1; target <= n; target++) {
        for (let num = 1; num <= target; num++) {
            const square = num * num;
            if (target - square < 0) {
                break;
            } else {
                dp[target] = Math.min(dp[target], 1 + dp[target - square]);
            }
        }
    }
    return dp[n];
}