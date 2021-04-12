var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let ans = 0, i = 0;
    for (let cookie of s) {
        if (cookie >= g[i]) {
            ans++;
            i++;
        }
    }
    return ans;
}