const quickSort = function (arr) {
  const partition = function(arr, lo, hi) {
    const pivot = arr[lo + ((hi - lo) >> 1)];
    let i = lo - 1;
    let j = hi + 1;
    while(1) {
      while (arr[i] < pivot) {
        i++;
      }
      while (arr[j] > pivot) {
        j--;
      }
      if (i >= j) return j;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  const helper = function(arr, lo, hi) {
    if (lo >= 0 && hi >= 0 && lo < hi) {
      const pi = partition(arr, lo, hi);
      helper(arr, lo, p);
      helper(arr, p + 1, hi);
    }
  }
  helper(arr, 0, arr.length - 1);
}

module.exports = quickSort