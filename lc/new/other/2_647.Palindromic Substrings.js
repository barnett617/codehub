// https://leetcode.com/problems/palindromic-substrings/

// 思路：找到每个子串，然后每个子串是否为回文
// TIME: O(n^3)
// SPACE: O(1)

function countSubstrings(s) {
    let ans = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            ans += isPalindrome(s, i, j) ? 1 : 0;
        }
    }

    function isPalindrome(s, i, j) {
        while (i < j) {
            if (s[i] !== s[j]) return false;
            i++;
            j--;
        }
        return true;
    }

    return ans;
}

// 思路：回文串的判断过程存在重叠子问题，即当前串是否回文决定于当前两端字符相等并且其子串是回文
// TIME: O(n^2)
// SPACE: O(n^2)

function countSubstrings(s) {
    let ans = 0;
    const n = s.length;
    if (n <= 0) return ans;
    const dp = Array(n).fill(null).map(x => Array(n).fill(false));
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        if (dp[i][i]) {
            ans++;
        }
    }
    for (let i = 0; i < n - 1; i++) {
        dp[i][i+1] = s[i] === s[i+1];
        if (dp[i][i+1]) {
            ans++;
        }
    }
    for (let len = 3; len <= n; len++) {
        for (let i = 0, j = i+len-1; j < n; i++, j++) {
            if (s[i] === s[j]) {
                if (j - i + 1 <= 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i+1][j-1];
                }
            }
            if (dp[i][j]) {
                ans++;
            }
        }
    }
    return ans;
}

// 思路：中点扩散判断回文
// TIME: O(n^2)
// SPACE: O(1)
function countSubstrings(s) {
    let ans = 0;
    const n = s.length;
    if (n <= 0) return ans;
    
    for (let i = 0; i < n; i++) {
        ans += expand(s, i, i);
        ans += expand(s, i, i+1);
    }

    function expand(s, i, j) {
        let ans = 0;
        const n = s.length;
        while (i >= 0 && j < n) {
            if (s[i] !== s[j]) break;
            i--;
            j++;
            ans++;
        }
        return ans;
    }

    return ans;
}
