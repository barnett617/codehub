/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // one pass method

  // move curNode n steps into list
  let curNode = head;
  for (let i = 0; i < n; i++) {
    curNode = curNode.next;
  }

  if (!curNode) {
    return head.next;
  }

  // move both pointers until curNode reached the end of list
  let removeNode = head;
  while (curNode.next) {
    curNode = curNode.next;
    removeNode = removeNode.next;
  }

  removeNode = removeNode.next;

  return head;
};