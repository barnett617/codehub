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
  // get the curNode into list
  let curNode = head;
  for (let i = 0; i < k - 1; i++) {
    curNode = curNode.next;
  }
  // find the endNode
  let endNode = head;
  while (endNode.next) {
    curNode = curNode.next;
    endNode = endNode.next;
  }
  let frontNode = head;
  for (let i = 0; i < k - 1; i++) {
    frontNode = frontNode.next;
  }
  const temp = frontNode.val;
  frontNode.val = endNode.val;
  endNode.val = temp;
  return head;
};