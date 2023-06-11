/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0, min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            // 如果当天价格大于前一天价格，则重新计算最大收益
            profit = Math.max(profit, prices[i] - min);
        } else {
            // 如果当天价格小于或等于前一天价格，则重新计算入手最低价
            min = Math.min(min, prices[i]);
        }
    }
    return profit;
};
// maxProfit([7,1,5,3,6,4]);
maxProfit([7,2,5,3,6,1]);
// @lc code=end

