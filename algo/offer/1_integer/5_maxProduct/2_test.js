function maxProduct(words) {
  // 1.声明常量
  const wordNums = words.length;
  const startCharCode = 'a'.charCodeAt();
  const mapLen = 26;
  // 2.创建字母表
  const flags = words.map(word => new Array(mapLen));
  // 3.遍历每个单词，记录字母出现情况
  for (let i = 0; i < wordNums; i++) {
    for (const char of words[i].split('')) {
      flags[i][char.charCodeAt() - startCharCode] = true;
    }
  }
  let result = 0;
  // 4.遍历每两个单词的交叉情况
  for (let i = 0; i < wordNums; i++) {
    for (let j = i + 1; j < wordNums; j++) {
      let k = 0;
      for (; k < mapLen; k++) {
        if (flags[i][k] && flags[j][k]) {
          break;
        }
      }
      // 5.统计最大不交叉情况
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