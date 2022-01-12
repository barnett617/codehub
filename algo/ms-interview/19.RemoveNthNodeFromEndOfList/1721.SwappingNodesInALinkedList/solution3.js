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
  // get the curNode into list with the same time find frontNode
  let curNode = head;
  let frontNode = head;
  for (let i = 0; i < k - 1; i++) {
    curNode = curNode.next;
    frontNode = frontNode.next;
  }
  let endNode = head;
  while (curNode.next) {
    curNode = curNode.next;
    endNode = endNode.next;
  }
  const temp = frontNode.val;
  frontNode = endNode.val;
  endNode.val = temp;
  return head;
};