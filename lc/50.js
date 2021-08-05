/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let N = n, X = x;
  if (n < 0) {
    X = 1 / x;
    N = -n;
  }
  return fastPow(X, N);
  function fastPow(x, n) {
    if (n === 0) return 1;
    let fast = fastPow(x, Math.floor(n / 2));
    let res = fast * fast;
    res = n % 2 === 0 ? res : res * x;
    return res;
  }
};