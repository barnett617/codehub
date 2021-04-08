// var isAnagram = function(s, t) {
//     let m = {};
//     let n = {};
//     for (let c of s) {
//         m[c] > -1 ? m[c]++ : m[c] = 0;
//     }
//     for (let c of t) {
//         n[c] > -1 ? n[c]++ : n[c] = 0;
//     }
//     let ml = 0, nl = 0;
//     for (let key in m) {
//         ml++;
//         if (m[key] !== n[key]) return false;
//     }
//     for (let key in n) nl++;
//     return ml === nl;
// }

var isAnagram = function(s, t) {
    let m = new Array(26).fill(0);
    let n = new Array(26).fill(0);
    for (let c of s) {
        m[c.charCodeAt() - 'a'.charCodeAt()]++;
    }
    for (let c of t) {
        n[c.charCodeAt() - 'a'.charCodeAt()]++;
    }
    let mlen = 0, nlen = 0;
    for (let key in m) {
        mlen++;
        if (m[key] !== n[key]) return false;
    }
    for (let key in n) {
        nlen++;
    }
    return mlen === nlen;
}

function main() {
    let s = 'anagram';
    let t = 'nagaram';
    console.log(isAnagram(s, t));
}
main();