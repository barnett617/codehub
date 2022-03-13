// https://leetcode.com/problems/permutation-in-string/

// 思路：使用两个map分别记录子串字符计数和目标串字符计数
// 当子串长度等于目标串长度时，比较两个map是否相同，如果相同则返回
// 否则缩小左边界，以使得右侧插入新元素继续比较

function checkInclusion(s1, s2) {
    let res = false;
    const s1Map = new Map();
    for (const ch of s1) {
        const count = s1Map.get(ch) || 0;
        s1Map.set(ch, count + 1);
    }
    const s2Map = new Map();
    let shrinkLeft = false;
    const sameMap = (s1, s2) => {
        if (s1.size !== s2.size) return false;
        for (const [key, val] of s1) {
            if (!s2.has(key) || s2.get(key) !== val) return false;
        }
        return true;
    }
    let left = 0;
    for (let right = 0; right < s2.length; right++) {
        const count = s2Map.get(s2[right]) || 0;
        s2Map.set(s2[right], count + 1);
        if (sameMap(s1Map, s2Map)) return true;
        if (right - left + 1 === s1.length) {
            shrinkLeft = true;
        }
        if (shrinkLeft) {
            const leftCh = s2[left];
            s2Map.set(leftCh, s2Map.get(leftCh) - 1);
            if (s2Map.get(leftCh) === 0) {
                s2Map.delete(leftCh);
            }
            left++;
        }
    }

    return res;
}