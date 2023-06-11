/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    if (n === 1) return 0
    if (n <= 2) return 1
    if (n % 2 === 1) {
        var l =  Math.floor(n / 2)
        return l * (l + 1)
    }
    return n * n / 4
};