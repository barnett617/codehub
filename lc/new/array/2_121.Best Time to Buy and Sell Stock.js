// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// 思路：遍历每个元素，如果当前元素小于最小值，则更新最小值作为更合适的买入点
// 如果当前值不小于买入点，则可以考虑是否卖出，判断当前卖出收益和全局最大收益哪个更大
// 最小买入点初始化为最大值，以让第一个买入点可以替换它

// TIME: O(n)
// SPACE: O(1)

function maxProfit(prices) {
    let max = 0;
    let buy = Infinity;
    for (const price of prices) {
        if (price < buy) {
            buy = price;
        } else {
            max = Math.max(max, price - buy);
        }
    }
    return max;
}