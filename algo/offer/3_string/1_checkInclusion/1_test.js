function checkInclusion(s1, s2) {
  if (s2.length < s1.length) return;

  const counts = Array(26).fill(0);
  const startCharCode = 'a'.charCodeAt();

  for (let i = 0; i < s1.length; i++) {
    counts[s1[i].charCodeAt() - startCharCode]++;
    counts[s2[i].charCodeAt() - startCharCode]--;
  }

  if (areAllZero(counts)) {
    return true;
  }

  for (let i = s1.length; i < s2.length; i++) {
    counts[s2[i].charCodeAt() - startCharCode]--;
    counts[s2[i - s1.length].charCodeAt() - startCharCode]++;
    if (areAllZero(counts)) {
      return true
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

  return false;
}

(function () {
  const testcase = [
    {
      s1: 'ab',
      s2: 'eidbaooo',
      expect: true
    },
    {
      s1: 'ab',
      s2: 'eidboaoo',
      expect: false
    }
  ]
  const result = [];
  console.time('calc');
  testcase.forEach(test => {
    result.push({
      input: JSON.stringify([test.s1, test.s2, test.expect]),
      expect: test.expect,
      output: checkInclusion(test.s1, test.s2)
    })
  })
  console.timeEnd('calc');
  console.table(result);
})()