var LFUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = [];
}

LFUCache.prototype.get = function(key) {
  let val = -1;
  if (!this.capacity) return val;

  const existIndex = this.cache.findIndex(item => item.key === key);
  if (existIndex > -1) {
    const item = this.cache[existIndex];
    val = item.value;
    item.count++;
    this.cache.splice(existIndex, 1);
    this.cache.unshift(item);
  }

  return val;
}

LFUCache.prototype.put = function(key, value) {
  if (!this.capacity) return;
  const existIndex = this.cache.findIndex(item => item.key === key);
  if (existIndex > -1) {
    const item = this.cache[existIndex];
    item.value = value;
    item.count++;
    this.cache.splice(existIndex, 1);
    this.cache.unshift(item);
  } else {
    if (this.cache.length === this.capacity) {
      let lfuIndex = 0;
      let leastCount = this.cache[lfuIndex].count;
      for (let i = 1; i < this.cache.length; i++) {
        const item = this.cache[i];
        if (item.count <= leastCount) {
          leastCount = item.count;
          lfuIndex = i;
        }
      }
      this.cache.splice(lfuIndex, 1);
    }
    this.cache.unshift({ key, value, count: 1 });
  }
}

module.exports = LFUCache