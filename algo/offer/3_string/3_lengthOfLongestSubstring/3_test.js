// 优化每次判断字符出现次数大于1
function lengthOfLongestSubstring(s) {
  if (!s || !s.length) return;

  let i = 0, j = -1, max = 0;
  const counts = new Array(256).fill(0);
  let countDup = 0;

  for (; i < s.length; i++) {
    if (++counts[s[i].charCodeAt()] === 2) {
      countDup++;
    }

    while (countDup) {
      ++j;
      if (--counts[s[j].charCodeAt()] === 1) {
        countDup--;
      }
    }

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