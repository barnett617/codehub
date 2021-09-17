var climbStairs = function(n) {
    if (n <= 2) return n;
    let ans;
    let n1 = 1;
    let n2 = 2;
    for (let i = 3; i <= n; i++) {
        ans = n1 + n2;
        n1 = n2;
        n2 = ans;
    }
    return ans;
}