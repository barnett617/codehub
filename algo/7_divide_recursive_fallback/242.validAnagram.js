// 异位词
var isAnagram = function(s, t) {
    // 自己维护哈希表
    let m = new Array(26).fill(0);
    let n = new Array(26).fill(0);
    for (const i of s) {
        // 对每种字母类型统计数目
        m[i.charCodeAt() - 'a'.charCodeAt()]++;
    }
    for (const i of t) {
        n[i.charCodeAt() - 'a'.charCodeAt()]++;
    }
    let mlen = 0, nlen = 0;
    for (let key in m) {
        mlen++;
        // 每种字母的个数相同
        if (m[key] !== n[key]) return false;
    }
    for (let key in n) {
        nlen++;
    }
    // 字母种类数相同
    return mlen === nlen;
}