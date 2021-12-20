/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  if (chars.length === 1) return 1;
  
  let left = 0, right = 0;
  while (right < chars.length) {
    const startChar = chars[right];
    let count = 0;
    while (right < chars.length && chars[right] === startChar) {
      right++;
      count++;
    }
    chars[left] = startChar;
    left++;
    if (count > 1) {
      for (const c of count.toString().split('')) {
        chars[left++] = c;
      }
    }
  }
  return left;
};

module.exports = compress