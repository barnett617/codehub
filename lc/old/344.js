var reverseString = function(s) {
  function helper(s, left, right) {
    if (left >= right) return;
    [s[left], s[right]] = [s[right], s[left]];
    helper(s, left + 1, right - 1);
  }
  return helper(s, 0, s.length - 1);
}

var reverseString2 = function(s) {
  for (let i = 0; i <= Math.floor((s.length - 1) >> 1); i++) {
    [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]];
  }
  return s;
}