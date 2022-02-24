// https://leetcode.com/problems/permutation-in-string/

// 思路：使用与字符集等长的数组作为map，将s1字符存入map1
// 以此将s2的子串存入map2，并持续比较map1和map2的字符统计情况

// TIME: O(l1l2)
// SPACE: O(1)

function checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    const s1Map = Array(26).fill(0);
    const s2Map = Array(26).fill(0);
    const charCodeStart = 'a'.charCodeAt();
    for (let i = 0; i < s1.length; i++) {
        s1Map[s1[i].charCodeAt() - charCodeStart]++;
        s2Map[s2[i].charCodeAt() - charCodeStart]++;
    }

    for (let i = 0; i < s2.length - s1.length; i++) {
        if (mapMatch(s1Map, s2Map)) return true;
        s2Map[s2[i + s1.length].charCodeAt() - charCodeStart]++;
        s2Map[s2[i].charCodeAt() - charCodeStart]--;
    }
    return mapMatch(s1Map, s2Map);

    function mapMatch(map1, map2) {
        for (let i = 0; i < map1.length; i++) {
            if (map1[i] !== map2[i]) return false;
        }
        return true;
    }
}