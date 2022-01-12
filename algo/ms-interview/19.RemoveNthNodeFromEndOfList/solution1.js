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

  // find length of list
  let len = 0;
  let curNode = head;
  while (curNode) {
    curNode = curNode.next;
    len++;
  }

  if (n === len) {
    return head.next;
  }

  // find node to remove - index = length - n - 1
  let removeIndex = len - n - 1;
  curNode = head;
  for (let i = 0; i < removeIndex; i++) {
    curNode = curNode.next;
  }
  curNode.next = curNode.next.next;

  return head;

  // Time: O(n)
  // Space: O(1)
};