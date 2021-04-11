var myPow = function(x, n) {
    let N = n;
    if (N < 0) {
        x = 1 / x;
        N = -N;
    }
    let res = 1;
    for (let i = 0; i < N; i++) {
        res = res * x;
    }
    return res;
}

var myPow2 = function(x, n) {
    let N = n;
    if (N < 0) {
        x = 1 / x;
        N = -N;
    }
    var helper = function(x, n) {
        if (n === 0) return 1;
        let half = helper(x, Math.floor(n / 2));
        if (n % 2 === 0) {
            return half * half;
        }
        return half * half * x;
    }
    return helper(x, N);
}

var myPow3 = function(x, n) {
    if (!n) return 1;
    if (n < 0) {
        return myPow(1 / x, -n);
    }
    if (n % 2) {
        return x * myPow(x, n - 1);
    }
    return myPow(x * x, Math.floor(n / 2));
}

var myPow4 = function(x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    let pow = 1;
    while (n) {
        if (n & 1) {
            pow *= x;
        }
        x *= x;
        n >>= 1;
    }
    return pow;
}