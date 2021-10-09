function lengthOfLongestSubstring(s) {
  if (!s || !s.length) return;

  const counts = new Array(256).fill(0);
  let i = 0, j = -1, longest = 1;
  for (; i < s.length; i++) {
    counts[s[i].charCodeAt()]++;
    while (hasGreaterThan1(counts)) {
      ++j;
      counts[s[j].charCodeAt()]--;
    }

    longest = Math.max(i - j, longest);
  }

  function hasGreaterThan1(counts) {
    for (const count of counts) {
      if (count > 1) return true;
    }
    return false;
  }

  return longest;
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