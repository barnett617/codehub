/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '' || needle.length === 0) {
        return 0
    }
    if (haystack.length >= needle.length) {
        let needleLen = needle.length;
        for (let i = 0, j = haystack.length - needleLen; i <= j; i++) {
            if (haystack.slice(i, i + needleLen) === needle) {
                return i;
            }
        }
    }
    return -1
    
};
strStr("a", "a")
// 参考思路
// 逐一从大字符串中拷贝出小字符串长度的字符串来和小字符串做比较，若相同则表示找到
// 总结
// 使用到了slice(start, end)方法，返回[start,end)范围的子字符串
// 遍历范围为大字符串减去小字符串的长度，并且包含边界(i<=j)
// @lc code=end

