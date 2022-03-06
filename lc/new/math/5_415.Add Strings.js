// https://leetcode.com/problems/add-strings/

// 思路：创建两个字符串长度之和的数组用于每位相加的结果
// 对于每位相加需要计算每个字符是否有值
// 二者相加记为本位，并将进位记入下一位

// TIME: O(n)
// SPACE: O(m+n)

function addStrings(num1, num2) {
    const res = Array(num1.length + num2.length).fill(0);
    const reverse = str => str.split('').reverse().join('');
    num1 = reverse(num1);
    num2 = reverse(num2);
    for (let i = 0; i < res.length; i++) {
        const sum = (num1[i] || 0) * 1 + (num2[i] || 0) * 1;
        const exist = res[i];
        res[i] = ((sum + exist) % 10);
        if (i + 1 < res.length) {
            res[i + 1] = Math.floor((sum + exist) / 10);
        }
    }
    res.reverse();
    const index = res.findIndex(x => x !== 0);
    return res.slice(index).join('');
}