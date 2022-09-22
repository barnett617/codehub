// https://leetcode.com/problems/lru-cache/

// LRU - Least Recent Used 最近最少使用的元素（剔除）

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// 思路：当缓存满后，逐出最近最少使用的节点
// 使用map存储节点，以保证O(1)的读写复杂度
// 使用双向链表维护最近最少访问节点，方便清除

var Node = function(key, val) {
  this.key = key;
  this.val = val;
  this.prev = null;
  this.next = null;
}

var LRUCache = function(capacity) {
  this.cap = capacity;
  this.cache = {};  // map key to node
  this.left = new Node(0, 0);
  this.right = new Node(0, 0);
  this.left.next = this.right;
  this.right.prev = this.left;
}

LRUCache.prototype.remove = function(node) {
  const pred = node.prev;
  const next = node.next;
  pred.next = next;
  next.prev = pred;
}

LRUCache.prototype.insert = function(node) {
  const pred = this.right.prev;
  const next = this.right;
  pred.next = node;
  node.prev = pred;
  node.next = next;
  next.prev = node;
}

LRUCache.prototype.get = function(key) {
  if (key in this.cache) {
    this.remove(this.cache[key]);
    this.insert(this.cache[key]);
    return this.cache[key].val;
  }
  return -1;
}

LRUCache.prototype.put = function(key, val) {
  if (key in this.cache) {
    this.remove(this.cache[key]);
  }
  this.cache[key] = new Node(key, val);
  this.insert(this.cache[key]);

  if (this.cache.length > this.cap) {
    const lru = this.left.next;
    this.remove(lru);
    delete this.cache[lru.key];
  }
}

