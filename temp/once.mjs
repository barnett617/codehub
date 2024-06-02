/**
  @template {Function} T
  @param {T} func
  @return {T}
*/
export default function once(func) {
  let called = false;
  let result = null;
  return function (...args) {
    if (called) {
      return result;
    } else {
      called = true;
      result = func.call(this, ...args);
      return result;
    }
  };
}
