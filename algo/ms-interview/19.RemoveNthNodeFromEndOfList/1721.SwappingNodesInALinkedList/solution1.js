/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    // Three pass
    
    // find the length of list
    let len = 0;
    let curNode = head;
    while (curNode) {
      curNode = curNode.next;
      len++
    }

    // find the front node
    let frontNode = head;
    for (let i = 0; i < k - 1; i++) {
      frontNode = frontNode.next;
    }

    // find the end node
    let endNode = head;
    let endIndex = len - k;
    for (let i = 0; i < endIndex; i++) {
      endNode = endNode.next;
    }

    // exchanage the value
    const temp = frontNode.val;
    frontNode.val = endNode.val;
    endNode.val = temp;

    return head;
};