// https://leetcode.com/problems/find-all-anagrams-in-a-string/

// 思路：使用两个map分别记录子串字符计数和目标串字符计数
// 当子串长度与目标串长度相同时，则不断右移左指针，以使得可以计算新的子串与目标串是否相同

function findAnagrams(s, p) {
    const res = [];
    const pMap = new Map();
    for (const ch of p) {
        const count = pMap.get(ch) || 0;
        pMap.set(ch, count + 1);
    }
    const sMap = new Map();
    let shrinkLeft = false;
    const sameMap = (m1, m2) => {
        if (m1.size !== m2.size) return false;
        for (const [key, val] of m1) {
            if (!m2.has(key) || m2.get(key) !== val) return false;
        }
        return true;
    }

    let left = 0;
    for (let right = 0; right < s.length; right++) {
        const count = sMap.get(s[right]) || 0;
        sMap.set(s[right], count + 1);
        if (right - left + 1 === p.length) {
            shrinkLeft = true;
        }
        if (sameMap(sMap, pMap)) {
            res.push(left);
        }
        if (shrinkLeft) {
            const leftCh = s[left];
            sMap.set(leftCh, sMap.get(leftCh) - 1);
            if (sMap.get(leftCh) === 0) {
                sMap.delete(leftCh);
            }
            left++;
        }
    }
    return res;
}