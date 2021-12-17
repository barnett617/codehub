const Heap = require('./Heap')

class MinHeap extends Heap {

  constructor() {
    super()
  }

  add(val) {
    if (val < this.peek()) {
      this.value.unshift(val);
    } else {
      let inserted = false;
      for (let i = 1; i < this.value.length; i++) {
        if (val < this.value[i]) {
          insert(this.value, i, val);
          inserted = true;
          break;
        }
      }
      if (!inserted) {
        this.value.push(val);
      }
    }
  }

  // [1, 3, 5]  4
  // [1, 3, 5]  5
  insert(arr, index, val) {
    for (let i = arr.length; i >= 0; i--) {
      if (i === index) {
        arr[i] = val;
        break;
      } else {
        arr[i] = arr[i - 1];
      }
    }
  }

}

module.exports = MinHeap