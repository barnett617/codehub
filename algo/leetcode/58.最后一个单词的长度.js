/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s.length < 1 || s === ' ') return 0
    if (s.length === 1 && s !== ' ') return 1
    if (s.length === s.replace(/\b/g, '')) return s.length
    var strArr = s.split('').reverse();
    // 题意理解错误，是要最后一个单词，不一定是最后一个单词后面不能有空格
    // if (strArr[0] === ' ') return 0
    let count = 0;
    // 逆序后无非两种情况，【是空格】或【不是空格】
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] !== ' ') {
            count++;
        } else if (strArr[i] === ' ' && count > 0) {
            return count
        }
    }
    return count
};
// 本题错了很多次
// 少考虑的地方主要是判断发现空格，并且不是开头的空格时候返回单词长度
lengthOfLastWord("b   a    ")
// @lc code=end

