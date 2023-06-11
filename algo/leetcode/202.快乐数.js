/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // var result = n;
    // var visited = {};
    // var getDigits = number => number.toString().split('').map(str => Number(str)); 
    // while (result !== 1) {
    //     var digits = getDigits(result);
    //     result = digits.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
    //     if (visited[result] === undefined) {
    //         visited[result] = true;
    //     } else {
    //         return false
    //     }
    // }
    // return true
    // (124 ms)
    // (36.4 MB)

    var seen = new Set();
    var m;
    while(n !== 1) {
        if (seen.has(n)) return false
        seen.add(n);
        // n 是上一次的加和，放到 m 上，用来开始本次逐位加和计算，然后 n 置零
        [m, n] = [n, 0];
        while (m > 0) {
            // 当 m 不大于0的时候，意味这每一位的加和计算完了
            n += (m % 10) ** 2
            // 每一次改变 m 都是在去掉最后一位
            // m = (m - m % 10) / 10
            // 这里可以优化为用取整操作
            m = Math.floor(m / 10)
            // (64 ms)
            // (35.7 MB)
        }
    }
    return true
    // (68 ms)
    // (35.7 MB)
};
// 核心：记录访问过的数
// 当再次遇到访问过的数时，会变成死循环
isHappy(2)
// @lc code=end

