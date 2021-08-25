/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  if (n === 1) return 0;
  let last = kthGrammar(n - 1, Math.ceil(k / 2));
  if (k % 2 === 0) {
      last = !last;
  }
  return last;
};