function maxProduct(words) {
  const len = words.length;
  const startCharCode = 'a'.charCodeAt();

  const flags = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    for (const ch of words[i].split('')) {
      flags[i] = flags[i] | (1 << (ch.charCodeAt() - startCharCode));
    }
  }

  let result = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if ((flags[i] & flags[j]) === 0) {
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