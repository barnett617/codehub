// https://leetcode.com/problems/triangle/

// 思路：画图表示出二维数组关系
// 使用一个数组用于存储每个位置上的最小状态，并初始为0
// 从底部遍历每个元素，将相邻两个元素进行比较，取更小者与当前值相加，更新该处状态

// TIME: O(n^2)
// SPACE: O(n)

function minimumTotal(triangle) {
    const dp = Array(triangle.length + 1).fill(0);
    for (let i = triangle.length - 1; i >= 0; i--) {
        const row = triangle[i];
        for (let i = 0; i < row.length; i++) {
            const cur = row[i];
            dp[i] = cur + Math.min(dp[i], dp[i + 1]);
        }
    }
    return dp[0];
}