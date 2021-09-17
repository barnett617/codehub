var findAnagrams = function(s, p) {
    var helper = function(str, type) {
        for (const item of str) {
            type[item.charCodeAt() - 'a'.charCodeAt()]++;
        }
    }
    var isAnagram = function(s, t) {
        const m = new Array(26).fill(0);
        const n = new Array(26).fill(0);
        helper(s, m);
        helper(t, n);
        let mlen = 0, nlen = 0;
        for (const key in m) {
            mlen++;
            if (m[key] !== n[key]) return false;
        }
        for (const key in n) {
            nlen++;
        }
        return mlen === nlen;
    }
    const plen = p.length;
    const ans = [];
    for (let i = 0; i < s.length - plen + 1; i++) {
        const cur = s.slice(i, i+plen);
        if (isAnagram(cur, p)) {
            ans.push(i);
        }
    }
    return ans;
}