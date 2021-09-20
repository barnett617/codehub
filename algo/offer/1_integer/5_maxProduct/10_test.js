function maxProduct(words) {
  // 1.创建常量
  const len = words.length;
  const startCharCode = 'a'.charCodeAt();
  // 2.创建整数数组记录字母
  const flags = new Array(len).fill(0);
  // 3.设置字母表
  for (let i = 0; i < len; i++) {
    for (const ch of words[i].split('')) {
      flags[i] |= (1 << (ch.charCodeAt() - startCharCode));
    }
  }
  let result = 0;
  // 4.遍历数组
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      // 5.记录结果
      if ((flags[i] & flags[j]) === 0) {
        const prod = words[i].length * words[j].length;
        result = Math.max(result, prod);
      }
    }
  }
  // 6.返回结果
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