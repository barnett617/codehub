/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    // 解法一
    // if (num < 1) return false;
    // while (num / 2 === parseInt(num / 2)) {
    //     num /= 2;
    // }
    // while (num / 3 === parseInt(num / 3)) {
    //     num /= 3;
    // }
    // while (num / 5 === parseInt(num / 5)) {
    //     num /= 5;
    // }
    // return num === 1
    // 5.91 %
    // 100 %

    // 解法二
    if (num < 1) return false;
    var factors = [], allowed = [2,3,5];
    while(num > 1) {
        if (num % 2 === 0) {
            factors.push(2);
            num /= 2;
        } else if (num % 3 === 0) {
            factors.push(3);
            num /= 3;
        } else if (num % 5 === 0) {
            factors.push(5);
            num /= 5;
        } else {
            factors.push(num);
            break;
        }
    }
    return factors.filter(x => {
        return allowed.includes(x) ? false : true
    }).length === 0
    // 98.46 %
    // 100 %
};
// @lc code=end

