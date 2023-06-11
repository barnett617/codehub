/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.replace(/\b/g, '').length === 0) return true
    // 将数字和字母以外的字符（\W）都去掉
    // 使用\W不严谨，因为其等价于[a-zA-Z0-9_]，是包含下划线的，不仅有数字和字母
    let arr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('');
    // let arr = s.replace(/\W/g, '').toLowerCase().split('');
    // 不一定必须偶数个，奇数长度的字符串，中间的字符自回文
    // if (arr.length % 2 > 0) return false

    // let flag = true;
    // // 遍历边界可优化，没必要比较奇数长度字符串时最中间的那个元素（和自身）
    // // for (let i = 0; i < arr.length / 2; i++) {
    // for (let i = 0; i < Math.floor(arr.length) / 2; i++) {
    //     if (arr[i] !== arr[arr.length - 1 - i]) {
    //         flag = false;
    //     }
    // }
    // return flag;

    // 返回时机可优化，当发现首尾不相等时，直接返回 false 终止程序
    for (let i = 0; i < Math.floor(arr.length) / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;

    // 改为用 some
    // 只要有一个首尾不相等，则 some 返回 true，则不是回文数
    // 如果都相等，则 some 返回 false，则是回文数
    // return !arr.some((value, index) => value !== arr[arr.length - 1 - index])
    // 时间复杂度比 for 循环更优

    // // 参考解法——倒置
    // // [^a-zA-Z0-9]表示字母数字以外的字符
    // const a = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // return a === a.split('').reverse().join('')
};
// 思路
// 首尾比较
isPalindrome("bace a car");
// isPalindrome("race a car");
// isPalindrome("A man, a plan, a canal: Panama");
// @lc code=end

