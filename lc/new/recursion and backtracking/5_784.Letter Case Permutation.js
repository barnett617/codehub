// https://leetcode.com/problems/letter-case-permutation/

// 思路：遍历每个元素，查看其是否为字母，对于字母，则将字母的大小写均作为组合进行记录
// 对于非字母，则直接在组合上进行追加
// 每次组合都是在已有组合的基础上进行遍历追加
// 即整个过程从1个字符、2个字符...依次进行组合叠加

function letterCasePermutation(s) {
    let resList = [''];
    const isUpperDigit = ch => ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90;
    const isLowerDigit = ch => ch.charCodeAt() >= 97 && ch.charCodeAt() <= 122;
    const isDigit = ch => isUpperDigit(ch) || isLowerDigit(ch);
    for (const ch of s) {
        const temp = []
        if (isDigit(ch)) {
            for (let res of resList) {
                temp.push(res + ch.toLowerCase());
                temp.push(res + ch.toUpperCase());
            }
        } else {
            for (let res of resList) {
                temp.push(res + ch);
            }
        }
        resList = temp;
    }

    return resList;
}