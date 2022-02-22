// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// 思路：BF-遍历以每个字符开始的子串是否不包含重复字符，并不断更新最大子串的长度
// TIME: O(n^3)
// SPACE: O(1)
function lengthOfLongestSubstring(s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (valid(s, i, j)) res = Math.max(res, j - i + 1);
        }
    }
    function valid(s, start, end) {
        const chars = Array(128).fill(0);
        for (let i = start; i <= end; i++) {
            const ch = s[i].charCodeAt();
            chars[ch]++;
            if (chars[ch] > 1) return false;
        }
        return true;
    }
    return res;
}

// 思路：使用两个指针操控滑动窗口，如果未出现重复字符，则扩大窗口
// 如果出现重复字符则收缩窗口，直至没有重复字符，当每次扩大窗口前，计算最大子串长度
// TIME: O(n)
// SPACE: O(1)
function lengthOfLongestSubstring(s) {
    let res = 0;
    let left = 0;
    let right = 0;
    const chars = Array(128).fill(0);
    while (right < s.length) {
        const ch = s[right].charCodeAt();
        chars[ch]++;
        while (chars[ch] > 1) {
            const leftCh = s[left].charCodeAt();
            chars[leftCh]--;
            left++;
        }
        res = Math.max(res, right - left + 1);
        right++;
    }
    return res;
}

// 思路：使用两个指针操控滑动窗口，使用一个数组记录所有字符出现的位置索引
// 当发生某个索引已经存在时，则说明遇到重复字符，此时只需将左指针移动到所以上一个出现该字符的下一个位置即可

function lengthOfLongestSubstring(s) {
    let res = 0;
    let left = 0;
    let right = 0;
    const chars = Array(128).fill(null);
    while (right < s.length) {
        const ch = s[right].charCodeAt();
        const index = chars[ch];
        if (index !== null && index >= left && index < right) {
            left = index + 1;
        }
        res = Math.max(res, right - left + 1);
        chars[ch] = right;
        right++;
    }
    return res;
}