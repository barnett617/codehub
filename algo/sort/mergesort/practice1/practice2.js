function mergeSort(arr) {
  var merge = function(arr, l, m, r) {
    const n1 = m - l + 1;
    const n2 = r - m;
    const L = new Array(n1);
    const R = new Array(n2);

    for (let i = 0; i < n1; i++) {
      L[i] = arr[l + i];
    }
    for (let j = 0; j < n2; j++) {
      R[j] = arr[m + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = l;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }
    while (j < n2) {
      arr[k] = R[j];
      j++
      k++;
    }
  }
  var divide = function(arr, l, r) {
    if (l >= r) {
      return;
    }
    const m = l + ((r - l) >> 1);
    divide(arr, l, m);
    divide(arr, m+1, r);
    merge(arr, l, m, r);
  }
  divide(arr, 0, arr.length - 1)
  return arr;
}

module.exports = mergeSort