// https://leetcode.com/problems/count-primes/

// 思路：数论中提出任何大于1的整数要么是质数，要么是由质数的乘积组成

function countPrimes(n) {
    if (n <= 2) return 0;
    const primes = [false, false].concat(Array(n - 2).fill(true));
    for (let p = 2; p * p < n; p++) {
        if (primes[p]) {
            for (let j = p * p; j < n; j += p) {
                primes[j] = false;
            }
        }
    }
    return primes.filter(prime => prime).length;
}