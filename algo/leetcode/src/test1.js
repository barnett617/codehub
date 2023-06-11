/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    // let l = 0, r = n, mid = 0;
    // while (l <= r) {
    //     mid = Math.floor(l + (r - l) * 0.5);
    //     let result = Math.floor((1 + mid) * mid * 0.5);
    //     if (result === n) return mid
    //     if (result > n) r = mid - 1
    //     if (result < n) l = mid + 1
    // }
    // return r

    return Math.floor(Math.pow(2 * n + 0.25, 0.5) - 0.5)
};

// console.log(arrangeCoins(8))
console.log(arrangeCoins(5))