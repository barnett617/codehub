// https://leetcode.com/problems/happy-number/

// 思路：对于重复出现的元素，考虑set；对于环，考虑快慢指针

// TIME: O(n)
// SPACE: O(n)
function isHappy(n) {
    function getNext(n) {
        let sum = 0;
        while (n) {
            let d = n % 10;
            sum += d * d;
            n = Math.floor(n / 10);
        }
        return sum;
    }
    const seen = new Set();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }
    return n === 1;
}

// TIME: O(n)
// SPACE: O(1)
function isHappy(n) {
    function getNext(n) {
        let sum = 0;
        while (n) {
            let d = n % 10;
            sum += d * d;
            n = Math.floor(n / 10);
        }
        return sum;
    }
    let slow = n;
    let fast = getNext(n);
    while (n !== 1 && fast !== slow) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast === 1;
}