function findAnagrams(s1, s2) {
  const indices = [];
  if (s1.length < s2.length) return indices;

  const counts = Array(26).fill(0);
  const startCharCode = 'a'.charCodeAt();

  let i = 0;
  for (; i < s2.length; i++) {
    counts[s2[i].charCodeAt() - startCharCode]++;
    counts[s1[i].charCodeAt() - startCharCode]--;
  }

  if (areAllZero(counts)) {
    indices.push(0);
  }

  for (; i < s1.length; i++) {
    counts[s1[i].charCodeAt() - startCharCode]--;
    counts[s1[i - s2.length].charCodeAt() - startCharCode]++;
    if (areAllZero(counts)) {
      indices.push(i - s2.length + 1);
    }
  }

  function areAllZero(counts) {
    for (const count of counts) {
      if (count !== 0) {
        return false;
      }
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