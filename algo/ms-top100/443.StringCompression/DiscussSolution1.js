/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let indexAns = 0, index = 0;
  while (index < chars.length) {
    const currentChar = chars[index];
    let count = 0;
    while (index < chars.length && chars[index] === currentChar) {
      index++;
      count++;
    }
    chars[indexAns++] = currentChar;
    if (count !== 1) {
      // the key step: just care about how long the variable count is
      for (const c of count.toString().split('')) {
        chars[indexAns++] = c;
      }
    }
  }
  return indexAns;
};