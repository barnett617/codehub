var mergeSort = function(arr) {
  const merge = function(arr, l, m, r) {
    const n1 = m - l + 1;
    const n2 = r - m;
    const L = new Array(n1);
    const R = new Array(n2);
    for (let i = 0; i < n1; i++) {
      L[i] = arr[i + l];
    }
    for (let j = 0; j < n2; j++) {
      R[j] = arr[j + m + 1];
    }
    let i = 0;
    let j = 0;
    let k = l;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
        k++;
      } else {
        arr[k] = R[j];
        j++;
        k++;
      }
    }
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
  }
  const divide = function(arr, l, r) {
    if (l >= r) {
      return;
    }
    const m = l + ((r - l) >> 1);
    divide(arr, l, m);
    divide(arr, m + 1, r);
    merge(arr, l, m, r);
  }
  divide(arr, 0, arr.length - 1);
}

module.exports = mergeSort