/**
 * 构造函数
 *  初始化容量
 *  初始化缓存表
 *  初始化双向链表的头尾指针
 * 
 * 链表节点构造函数
 *  头指针
 *  尾指针
 * 
 * 添加元素方法
 *  对于存在元素先进行删除（更新位置）
 *  插入元素
 *  如果超出容量则删除lru节点
 * 
 * 取出元素方法
 *  对于存在元素先进行删除
 *  插入元素（更新位置）
 *  返回元素值
 *  对于不存在元素返回空
 * 
 * 删除指定节点方法
 *  将节点前后节点的指针进行更新
 * 
 * 插入节点到尾部方法
 *  找到链表尾部节点及其前置节点，将新节点插到中间，并形成连接
 */

function LRUCache(capacity) {
  this.capacity = capacity;
  this.cache = {};

  this.left = new Node();
  this.right = new Node();
  this.left.next = this.right;
  this.right.prev = this.left;
}

function Node(key, val) {
  this.key = key === undefined ? 0 : key;
  this.val = val === undefined ? 0 : val;
  this.prev = null;
  this.next = null;
}

LRUCache.prototype.put = function(key, val) {
  if (key in this.cache) {
    this.delete(this.cache[key]);
  }
  this.cache[key] = new Node(key, val);
  this.insert(this.cache[key]);
  if (this.cache.length > this.capacity) {
    const lru = this.left.next;
    this.delete(lru);
    delete this.cache[lru.key];
  }
}

LRUCache.prototype.get = function(key) {
  if (key in this.cache) {
    const node = this.cache[key];
    this.delete(node);
    this.insert(node);
    return node;
  }
  return -1;
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
  next.prev = node;
  node.next = next;
  node.prev = pred;
}