/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return '1'
    // 第一次这里忘记生成递归基础
    if (n === 2) return '11'
    var beforeArr = countAndSay(n-1).toString().split('');
    var result = [];
    for (let i = 0, count = 1; i < beforeArr.length; i++) {
        if (beforeArr[i+1] === beforeArr[i]) {
            count++;
        } else {
            result.push([count, beforeArr[i]]);
            // 第一次这里忘记清空计数器
            count = 1;
        }
    }
    var resultStr = '';
    for (let i = 0; i < result.length; i++) {
        resultStr += result[i][0];
        resultStr += result[i][1];
    }
    return resultStr
};
countAndSay(6)
// 思路
// 先倒着依次找到前一个数是什么
// 直到 n=2 得到一个有规律的数，然后通过 n=2 的数依次计算 n>2 的每个数
// 直到计算出目标结果
// 计算方法使用二维数组存储前一个数字的描述
// @lc code=end

