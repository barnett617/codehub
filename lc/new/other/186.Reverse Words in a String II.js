// https://leetcode.com/problems/reverse-words-in-a-string-ii/
// 思路：反转整体，然后找到每个单词进行反转
// TIME: O(n^2)
// SPACE: O(1)
function reverseWords(s) {
    reverse(s, 0, s.length - 1);
    let left = 0;
    let right;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            right = i - 1;
            reverse(s, left, right);
            left = i + 1;
        }
    }
    reverse(s, left, right);
    function reverse(s, left, right) {
        while (left < right) {
            [s[left], s[right]] = [s[right], s[left]];
            left++;
            right--;
        }
    }
}