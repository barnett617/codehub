/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    // 参考解法
    const resolve = (curr, prev) => {
        if (curr === null) {
            return;
        }
        if (prev && prev.val === curr.val) {
            prev.next = curr.next;
            resolve(curr.next, prev)
        } else {
            resolve(curr.next, curr);
        }
    }
    // 递归处理，传入链表头节点
    resolve(head, null);
    return head
};
function ListNode(val) {
    this.val = val;
    this.next = null;
}
function List() {
    // 链表头节点只有值，没有下一个值
    this.head = new ListNode(1);
    this.find = function(val) {
        let curr = this.head;
        // while(curr.val !== val) {
        //     curr = curr.next;
        // }
        curr = curr.next;
        return curr;
    };
    this.insert = function(val, index) {
        let newNode = new ListNode(val);
        let target = this.find(index);
        // 将插入位置节点的指向改为新节点去指向
        newNode.next = target.next;
        target.next = newNode;
    }
}
const list = new List();
list.insert(1, 1);
list.insert(2, 1);
list.insert(3, 2);
list.insert(3, 3);

// deleteDuplicates();
// @lc code=end

