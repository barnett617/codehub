function findAnagrams(s, p) {
  const indices = [];
  if (s.length < p.length) return indices;

  const counts = Array(26).fill(0);
  const startCharCode = 'a'.charCodeAt();

  let i = 0;
  for (; i < p.length; i++) {
    counts[p[i].charCodeAt() - startCharCode]++;
    counts[s[i].charCodeAt() - startCharCode]--;
  }

  if (areAllZero(counts)) {
    indices.push(0);
  }

  for (; i < s.length; i++) {
    counts[s[i].charCodeAt() - startCharCode]--;
    counts[s[i - p.length].charCodeAt() - startCharCode]++;
    if (areAllZero(counts)) {
      indices.push(i - p.length + 1);
    }
  }

  function areAllZero(counts) {
    for (const count of counts) {
      if (count !== 0) return false;
    }
    return true;
  }

  return indices;
}

(function () {
  const testcase = [
    {
      s: 'cbaebabacd',
      p: 'abc',
      expect: [0, 6]
    },
    {
      s: 'abab',
      p: 'ab',
      expect: [0, 1, 2]
    }
  ];
  const result = [];
  console.time('calc');
  testcase.forEach(test => {
    result.push({
      input: JSON.stringify([test.s, test.p, test.expect]),
      expect: test.expect,
      output: findAnagrams(test.s, test.p)
    })
  })
  console.timeEnd('calc');
  console.table(result);
})()