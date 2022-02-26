// https://leetcode.com/problems/coin-change/

// 思路：使用数组存储所有小于目标金额所需硬币的数量，并将所有状态初始化为大于目标金额的数
// 将目标金额为0所需的金币数初始化为0，然后以此计算目标金额更大所需最少金币数
// 当遇到当前金币小于当前子问题目标金额时，金币数累加

function coinChange(coins, amount) {
    coins.sort((a, b) => a - b);
    const dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let i = 0; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            } else break;
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}