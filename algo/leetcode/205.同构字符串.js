/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // var obj = {};
    // for (var i = 0; i < s.length; i++) {
    //     if (!obj['s' + s[i]]) obj['s' + s[i]] = t[i];
    //     if (!obj['t' + t[i]]) obj['t' + t[i]] = s[i];
    //     if (s[i] !== obj['t' + t[i]] || t[i] !== obj['s' + s[i]]) return false;
    // }
    // return true

    // (100 ms)
    // (39.2 MB)

    // 解法二

    // var map = new Map();
    // for (var i = 0; i < s.length; i++) {
    //     if (!map.has(s[i])) {
    //         map.set(s[i], t[i]);
    //     } else {
    //         if (map.get(s[i]) !== t[i]) {
    //             return false
    //         }
    //     }
    // }
    // var result = new Set([...map.values()]).size === map.size;
    // return result

    // (72 ms)
    // (36 MB)

    // 解法二优化
    var [memo, seen] = [new Map(), new Set()];
    for (var i = 0; i < s.length; i++) {
        if (!memo.get(s[i]) && !seen.has(t[i])) {
            memo.set(s[i], t[i]);
            seen.add(t[i]);
        } else {
            if (memo.get(s[i]) !== t[i]) {
                return false;
            }
        }
    }
    return true;

    // (68 ms)
    // (36.4 MB)

    // map 用于存储两个字符串的对应关系
    // set 用于存储 t 都存在哪些字母
    // 需要保证 t 中的字母在 s 中都对应唯一的一个字母 <= 两个字符不能映射到同一个字符上

};
isIsomorphic('ab', 'aa')
// @lc code=end

