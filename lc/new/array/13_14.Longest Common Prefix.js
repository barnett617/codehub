// https://leetcode.com/problems/longest-common-prefix/

// 思路：按长度排序，然后以第一个单词的每一个字符作为公共前缀，检查除它以外的每个单词
// 当遇到相同索引位置字符不同时，即可返回，否则不断累加最长前缀和字符索引

// TIME: O(n^2)
// SPACE: O(1)

function longestCommonPrefix(strs) {
    if (!strs || !strs.length) return '';
    let res = '';
    strs.sort((a, b) => a.length - b.length);
    let index = 0;
    for (const ch of strs[0]) {
        for (const str of strs) {
            if (ch !== str[index]) return res;
        }
        res += ch;
        index++;
    }
    return res;
}