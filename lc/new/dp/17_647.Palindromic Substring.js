// https://leetcode.com/problems/palindromic-substrings/

// 思路：遍历每个字符，将其作为中心向两边扩散，对于回文子串进行计数
// 考虑奇数长度和偶数长度的情况

// TIME: O(n)
// SPACE: O(1)

function countSubstrings(s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        res += countPali(s, i, i);
        res += countPali(s, i, i+1);
    }
    function countPali(s, l, r) {
        let count = 0;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            count++;
            l--;
            r++;
        }
        return count;
    }
    return res;
}