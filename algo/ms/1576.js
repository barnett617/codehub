/**
 * @param {string} s
 * @return {string}
 */
 var modifyString = function(s) {
  const alphabet = [];
  for (let i = 97; i < 97 + 26; i++) {
      let letter = String.fromCharCode(i);
      alphabet.push(letter);
  }
  const list = s.split('');
  for (let i = 0; i < list.length; i++) {
      if (list[i] === '?') {
          list[i] = alphabet.filter(item => item !== list[i - 1] && item !== list[i + 1])[0];
      }
  }
  return list.join('');
};