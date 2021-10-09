function lengthOfLongestSubstring(s) {
  // 1.判空
  if (!s || !s.length) return;
  // 2.声明左右指针、最大值、哈希表
  let i = 0, j = -1, max = 0;
  const counts = new Array(256).fill(0);
  // 3.遍历字符串
  for (; i < s.length; i++) {
    // 4.对每个字符做记录
    counts[s[i].charCodeAt()]++;
    // 5.如果某个字符出现次数超过1则右移左指针
    while (greaterThan1(counts)) {
      j++;
      counts[s[j].charCodeAt()]--;
    }
    max = Math.max(max, i - j);
  }
  function greaterThan1(counts) {
    return counts.some(count => count > 1);
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