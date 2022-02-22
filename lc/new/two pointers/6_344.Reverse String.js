// https://leetcode.com/problems/reverse-string/

// 思路：双指针
// TIME: O(n)
// SPACE: O(1)
function reverseString(s) {
    let left = 0;
    let right = s.length;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}