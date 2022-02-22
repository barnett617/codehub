// https://leetcode.com/problems/reverse-string-ii/

// 思路：遍历每K个元素，如果不足K个则前移右指针，直至左右指针是一个有效区间
// 然后进行字符串数组反转
// 每次遍历递增2K位
function reverseStr(s, k) {
    const list = s.split('');
    for (let i = 0; i < s.length; i += k * 2) {
        let j = i + k - 1;
        while (!list[j]) j--;
        reverse(list, i, j);
    }
    function reverse(list, i, j) {
        while (i < j) {
            [list[i], list[j]] = [list[j], list[i]];
            i++;
            j--;
        }
    }
    return list.join('')
}