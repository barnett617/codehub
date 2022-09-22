function LRUCache(capacity) {
  this.capacity = capacity;
  this.cache = {};

  // 有首尾两个哨兵节点
  this.left = new Node();
  this.right = new Node();
  // 初始状态为首尾节点互指
  this.left.next = this.right;
  this.right.prev = this.left;
}

// 双向链表节点，有前后两个指针
function Node(key, val) {
  this.key = key === undefined ? 0 : key;
  this.val = val === undefined ? 0 : val;
  this.prev = null;
  this.next = null;
}

LRUCache.prototype.put = function(key, val) {
  // 如果已存在，则更新位置
  if (key in this.cache) {
    this.delete(this.cache[key]);
  }

  // 插入新元素
  this.cache[key] = new Node(key, val);
  this.insert(this.cache[key]);

  // 如果超出容量，则删除lru节点
  if (this.cache.length > this.capacity) {
    const lru = this.left.next;
    this.remove(lru);
    delete this.cache[lru.key];
  }
}

LRUCache.prototype.get = function(key) {
  // 如果有，则更新位置
  if (key in this.cache) {
    this.remove(this.cache[key]);
    this.insert(this.cache[key]);
    return this.cache[key].val;
  }
  return -1;
}

// 链表操作 - 插入节点到链表尾部，因为头部是lru
LRUCache.prototype.insert = function(node) {
  const pred = this.right.prev;
  const next = this.right;
  pred.next = node;
  next.prev = node;
  node.prev = pred;
  node.next = next;
}

// 链表操作 - 删除链表指定节点
LRUCache.prototype.delete = function(node) {
  const pred = node.prev;
  const next = node.next;
  pred.next = next;
  next.prev = pred;
}