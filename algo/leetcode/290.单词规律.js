/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var list = str.split(' ');
    var map = {};
    var parList = pattern.split('');
    if (list.length !== parList.length) return false
    for (var i = 0; i < parList.length; i++) {
        if (!map[parList[i]]) {
            map[parList[i]] = list[i];
        } else {
            if (map[parList[i]] !== list[i]) return false
        }
    }
    return new Set(Object.keys(map)).size === new Set(Object.values(map)).size;
};
// @lc code=end

