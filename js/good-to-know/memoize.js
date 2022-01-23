function memoize(callback) {
  var value;
  return function () {
      if (callback) {
          value = callback();
          callback = undefined;
      }
      return value;
  };
}

const callback = () => {
  return Date.now();
}
const memo = memoize(callback);
const res = memo();

