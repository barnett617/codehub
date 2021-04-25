var hammingWeight = function(n) {
    let count = 0;
    while (n) {
        count++;
        n = n & (n - 1);
    }
    return count;
}

var hammingWeight2 = function(n) {
    let count = 0;
    let str = n.toString(2);
    for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}

var hammingWeight3 = function(n) {
    let count = 0;
    let mask = 1;
    for (let i = 0; i < 32; i++) {
        if (n & mask) {
            count++;
        }
        n = n >> 1;
    }
    return count;
}