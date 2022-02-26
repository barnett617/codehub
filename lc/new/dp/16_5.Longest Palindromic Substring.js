// https://leetcode.com/problems/longest-palindromic-substring/

// 思路：依次以每个字符作为中心点向两边扩散，考虑奇偶数情况的字符串
// 遇到更长的回文子串则更新

// TIME: O(n)
// SPACE: O(1)

function longestPalindrome(s) {
    let res = '';
    for (let i = 0; i < s.length; i++) {
        isPalindrome(s, i, i);
        isPalindrome(s, i, i+1);
    }
    function isPalindrome(s, l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > res.length) {
                res = s.substring(l, r + 1);
            }
            l--;
            r++;
        }
    }
    return res;
}