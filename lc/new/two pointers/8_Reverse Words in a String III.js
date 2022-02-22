// https://leetcode.com/problems/reverse-words-in-a-string-iii/
// 思路：按空格进行分割，将原始字符转换成数组
// 对数组中的每个单词进行字符反转
// 将反转后的每个单词填回数组对应位置，并将结果数组连接成字符串

function reverseWords(s) {
    const list = s.split(' ');
    for (let i = 0; i < list.length; i++) {
        const subList = list[i].split('');
        reverse(subList, 0, subList.length - 1);
        list[i] = subList.join('');
    }
    function reverse(list, i , j) {
        while (i < j) {
            [list[i], list[j]] = [list[j], list[i]];
            i++;
            j--;
        }
    }
    return list.join(' ');
}