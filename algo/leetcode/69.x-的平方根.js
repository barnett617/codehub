/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // // 利用指数对数公式的优秀解法
    // let sqrtX = Math.pow(Math.E, 0.5 * Math.log(x));
    // let ceil = Math.ceil(sqrtX), floor = Math.floor(sqrtX);
    // if (Math.pow(ceil, 2) === x) return ceil;
    // return floor;

    // // 优秀的分治策略
    // var result = x;
    // while(result ** 2 > x) {
    //     result = Math.floor((result + x / result) / 2)
    // }
    // return result

    // 二分查找
    let left = 0, right = x;
    // 因为最后左边界等于右边界，所以结果肯定在两个边界之一
    while (left < right) {
        // 因为中值向下取整，所以查找范围一直是范围内的整数
        let mid = parseInt((left + right) / 2);
        if (mid * mid === x) {
            return mid
        } else if (mid * mid > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    // 核心判断
    // 为什么最后取结果的标准是拿右游标判断？
    return x < right * right ? right - 1 : right
};
mySqrt(15)
// @lc code=end

