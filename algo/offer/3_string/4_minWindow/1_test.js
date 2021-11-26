function minWindow(s, t) {
  const map = new Map();
  for (const char of t.split('')) {
    let exist = map.get(char.charCodeAt());
    const val = exist ? exist + 1 : 1;
    map.set(char.charCodeAt(), val)
  }
  
  let count = map.size;
  let start = 0, end = 0, minStart = 0, minEnd = 0;
  let minLength = Infinity;
  while (end < s.length || (count === 0 && s.length === end)) {
    if (count > 0) {
      const char = s[end].charCodeAt();
      if (map.has(char)) {
        map.set(char, map.get(char) - 1);
        if (map.get(char) === 0) {
          count--;
        }
      }
      end++;
    } else {
      if (end - start < minLength) {
        minLength = end - start;
        minStart = start;
        minEnd = end;
      }
      const char = s[start].charCodeAt();
      if (map.has(char)) {
        map.set(char, map.get(char) + 1);
        if (map.get(char) === 1) {
          count++;
        }
      }
      start++;
    }
  }
  return minLength < Infinity ? s.substring(minStart, minEnd) : '';
};

(function () {
  const testcase = [
    {
      s: 'ADOBECODEBANC',
      t: 'ABC',
      expect: 'BANC'
    },
    {
      s: 'a',
      t: 'a',
      expect: 'a'
    },
    {
      s: 'a',
      t: 'aa',
      expect: ''
    }
  ]
  const result = [];
  console.time('calc');
  testcase.forEach(test => {
    result.push({
      input: [test.s, test.t],
      expect: test.expect,
      output: minWindow(test.s, test.t)
    })
  })
  console.timeEnd('calc');
  console.table(result);
})()