// https://leetcode.com/problems/add-binary/

// 思路：创建两个字符串长度和的数组存储每位相加结果
// 将两个数倒叙的每位进行相加，将余数更新为当前位，并将进位更新至下一位

// TIME: O(n)
// SPACE: O(m+n)

function addBinary(a, b) {
    const res = Array(a.length + b.length).fill(0);
    const reverse = str => str.split('').reverse().join('');
    a = reverse(a);
    b = reverse(b);
    for (let i = 0; i < res.length; i++) {
        const sum = (a[i] || 0) * 1 + (b[i] || 0) * 1;
        const exist = res[i];
        res[i] = ((sum + exist) % 2);
        if (i + 1 < res.length) {
            res[i + 1] = Math.floor((sum + exist) / 2);
        }
    }
    res.reverse();
    const index = res.findIndex(x => x !== 0);
    return res.slice(index).join('');
}