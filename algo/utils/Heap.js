class Heap {

  constructor() {
    this.value = [];
  }

  size() {
    return this.value.length;
  }
 
  peek() {
    return this.value[0];
  }

  poll() {
    return this.value.shift();
  }

}

module.exports = Heap