var MyCircularQueue = function(k) {
  this.capacity = k;
  this.count = 0;
  this.headIndex = 0;
  this.queue = [];
}

MyCircularQueue.prototype.enQueue = function(value) {
  if (this.count === this.capacity) return false;
  this.queue[(this.headIndex + this.count) % this.capacity] = value;
  this.count++;
  return true;
}

MyCircularQueue.prototype.deQueue = function() {
  if (!this.count) return false;
  this.headIndex = (this.headIndex + 1) % this.capacity;
  this.count--;
  return true;
}

MyCircularQueue.prototype.Front = function() {
  if (!this.count) return -1;
  return this.queue[this.headIndex];
}

MyCircularQueue.prototype.Rear = function() {
  if (!this.count) return -1;
  const tailIndex = (this.headIndex + this.count - 1) % this.capacity;
  return this.queue[tailIndex];
}

MyCircularQueue.prototype.isEmpty = function() {
  return this.count === 0;
}

MyCircularQueue.prototype.isFull = function() {
   return this.count === this.capacity;
}

module.exports = MyCircularQueue;