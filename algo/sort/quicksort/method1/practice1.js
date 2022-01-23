const quicksort = function(arr) {
  const partition = function(arr, low, high) {
    let pivot = arr[high];
    // index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
      if (arr[j] < pivot) {
        i++;
        if (i !== j) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
    if (i + 1 !== high) {
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    }
    return i + 1;
  }
  const helper = function(arr, low, high) {
    if (low < high) {
      const pi = partition(arr, low, high);
      helper(arr, low, pi - 1);
      helper(arr, pi + 1, high);
    }
  }
  helper(arr, 0, arr.length - 1);
}

module.exports = quicksort