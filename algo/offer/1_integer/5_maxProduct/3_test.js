function maxProduct(words) {
  const wordNums = words.length;
  const startCharCode = 'a'.charCodeAt();
  const mapLen = 26;
  const flags = words.map(word => new Array(mapLen));
  for (let i = 0; i < wordNums; i++) {
    for (const char of words[i].split('')) {
      flags[i][char.charCodeAt() - startCharCode] = true;
    }
  }
  let result = 0;
  for (let i = 0; i < wordNums; i++) {
    for (let j = i + 1; j < wordNums; j++) {
      let k = 0;
      for (; k < mapLen; k++) {
        if (flags[i][k] && flags[j][k]) {
          break;
        }
      }
      if (k === mapLen) {
        const prod = words[i].length * words[j].length;
        result = Math.max(result, prod);
      }
    }
  }
  return result;
}

(function () {
  const testcase = [
    ["abcw","baz","foo","bar","fxyz","abcdef"],
    ["a","ab","abc","d","cd","bcd","abcd"],
    ["a","aa","aaa","aaaa"]
  ]
  const result = [];
  console.time('calc');
  testcase.forEach(test => {
    result.push({
      input: test,
      output: maxProduct(test)
    });
  })
  console.timeEnd('calc');
  console.log(result);
})()