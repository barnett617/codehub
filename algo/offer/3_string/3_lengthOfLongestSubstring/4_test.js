function lengthOfLongestSubstring(s) {
  // 1.判空
  if (!s || !s.length) return;
  // 2.声明左右指针、最大值变量、哈希表、计算重复变量
  let j = -1, i = 0, max = 0, countDup = 0;
  const counts = new Array(256).fill(0);
  // 3.遍历每个字符并计入哈希表
  for (; i < s.length; i++) {
    // 4.对于出现次数等于2的字符，改变计重变量，并右移左指针，直到计重变量归零
    if (++counts[s[i].charCodeAt()] === 2) {
      countDup++;
    }
    while (countDup) {
      ++j;
      if (--counts[s[j].charCodeAt()] === 1) {
        countDup--;
      }
    }
    // 5.记录当前最大值
    max = Math.max(max, i - j);
  }
  return max;
}

(function () {
  const testcase = [
    {
      s: 'abcabcbb',
      expect: 3
    },
    {
      s: 'bbbbb',
      expect: 1
    },
    {
      s: 'pwwkew',
      expect: 3
    }
  ]
  const result = [];
  console.time('calc');
  testcase.forEach(test => {
    result.push({
      input: test.s,
      expect: test.expect,
      output: lengthOfLongestSubstring(test.s)
    })
  })
  console.timeEnd('calc');
  console.table(result);
})()