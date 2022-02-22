// https://leetcode.com/problems/is-subsequence/

// 思路：遍历每个长串，判断当前字符是否等于短串当前的字符，如果是则更新短串位置
// 最后如果长串遍历结束，短串还未到末尾，则返回false

// TIME: O(n)
// SPACE: O(1)
function isSubsequence(s, t) {
    let s1 = 0;
    let t1 = 0;
    while (s1 < s.length && t1 < t.length) {
        if (t[t1] === s[s1]) {
            s1++;
        }
        t1++;
    }
    return s1 === s.length;
}