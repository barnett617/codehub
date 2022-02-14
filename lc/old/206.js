function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

var reverseList = function(head) {
  function helper(head) {
    if (!head || !head.next) return head;
    const newHead = helper(head.next);
    head.next.next = head;
    head.next = null;
    return newHead; 
  }
  return helper(head);
}

var reverseList2 = function(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}