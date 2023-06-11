/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0], profit = 0, temp = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i-1]) {
            temp = Math.max(profit, prices[i] - min);
            // 区别于只能交易一次的，每当价格大于前一天时，要计算最大收益并卖出
            // 卖出后当前最大收益清零，并将已获收益累计起来
            // 买入最小值也以卖出当天开始重新计算（不能继续使用卖出一次之前的最小价格作为最低值）
            profit += temp;
            temp = 0;
            min = prices[i];
        } else {
            min = Math.min(min, prices[i]);
        }
    }
    return result
};
// @lc code=end

