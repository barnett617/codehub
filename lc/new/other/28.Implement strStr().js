// https://leetcode.com/problems/implement-strstr/

// 思路：对于范围串，寻找每个等于目标串的子串，查看是否相同

function strStr(haystack, needle) {
    if (!needle || !needle.length) return 0;
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;
}