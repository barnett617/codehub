// https://leetcode.com/problems/longest-palindromic-substring/

// 思路：对于长度小于2的串做单独处理
// 依次判断从每个字符开始的长度大于等于2的子串是否是回文的
// 记录有效回文开始位置和最大回文长度，然后以此计算回文子串

// TIME: O(n^3)
// SPACE: O(1)

function longestPalindrome(s) {
    const len = s.length;
    if (len < 2) return s;

    let maxLen = 1;
    let begin = 0;

    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (j - i + 1 > maxLen && valid(s, i, j)) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }
    return s.substring(begin, begin + maxLen);

    function valid(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}

// 思路：从中间向两边扩散，判断是否回文
// 假如是长度为奇数的子串，则中心为一个元素，以此元素进行两边扩散，并不断判断两边元素是否相等
// 假如是长度为偶数的子串，则中心为两个元素，以此进行两边扩散
// 比较以奇数为中心的回文子串和以偶数为中心的回文子串哪个更长
// 取更长者计算开始位置和最长子串长度，开始位置的计算需要通过中心点折半与当前位置的计算差值

// TIME: O(n^2)
// SPACE: O(1)
function longestPalindrome(s) {
    const len = s.length;
    if (len < 2) return s;

    let maxLen = 1;
    let begin = 0;
    for (let i = 0; i < len - 1; i++) {
        const oddLen = expand(s, i, i);
        const evenLen = expand(s, i, i+1);
        const curLen = Math.max(oddLen, evenLen);
        if (curLen > maxLen) {
            maxLen = curLen;
            begin = i - Math.floor((curLen - 1) / 2);
        }
    }

    return s.substring(begin, begin + maxLen);

    function expand(s, left, right) {
        const len = s.length;
        let i = left;
        let j = right;
        while (i >= 0 && j < len) {
            if (s[i] === s[j]) {
                i--;
                j++;
            } else {
                break;
            }
        }
        return (j - 1) - (i + 1) + 1;
    }
}

// 思路：DP，对于长度大于等于2的回文字符串满足以下条件
// 两边的两个字符相同，并且其内一层也如此

// TIME: O(n^2)
// SPACE: O(n^2)
function longestPalindrome(s) {
    const len = s.length;
    if (len < 2) return s;

    let maxLen = 1;
    let begin = 0;

    const dp = Array(len).fill(null).map(x => Array(len).fill(false));
    for (let i = 0; i < len; i++) {
        dp[i][i] = true;
    }

    for (let L = 2; L <= len; L++) {
        for (let i = 0; i < len; i++) {
            let j = i + L - 1;
            if (j >= len) {
                break;
            }

            if (s[i] !== s[j]) {
                dp[i][j] = false;
            } else {
                if (j - i + 1 < 4) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i+1][j-1];
                }
            }

            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }
    return s.substring(begin, begin + maxLen);
}