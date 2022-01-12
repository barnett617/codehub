var LRUCache = function(capacity) {
  this.size = 0;
  this.capacity = capacity;
  this.cache = {};
  this.head = new DLinkedNode();
  this.tail = new DLinkedNode();
  this.head.next = this.tail;
  this.tail.next = this.head;
}

function DLinkedNode() {
  this.key = null;
  this.value = null;
  this.head = null;
  this.tail = null;
}

LRUCache.prototype.put = function(key, value) {
  const node = this.cache[key];
  if (node) {
    node.value = value;
    moveToHead.call(this, node);
  } else {
    const newNode = new DLinkedNode();
    newNode.key = key;
    newNode.value = value;
    this.cache[key] = newNode;
    addNode.call(this, newNode);
    if (++this.size > this.capacity) {
      const tail = popTail.call(this);
      delete this.cache[tail.key];
      this.size--;
    }
  }
}

LRUCache.prototype.get = function(key) {
  const node = this.cache[key];
  if (node) {
    moveToHead.call(this, node);
    return node.value;
  } else {
    return -1;
  }
}

function moveToHead(node) {
  removeNode.call(this, node);
  addNode.call(this, node);
}

function addNode(node) {
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
}

function popTail() {
  const node = this.tail.prev;
  removeNode(node);
  return node;
}

function removeNode(node) {
  const prev = node.prev;
  const next = node.next;
  prev.next = next;
  next.prev = prev;
}

module.exports = LRUCache;