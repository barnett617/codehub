function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

var swapPairs = function(head) {
  function helper(head) {
    if (!head || !head.next) return head;
    let first = head;
    let second = head.next;
    first.next = helper(second.next);
    second.next = first;
    return second;
  }
  return helper(head);
}

var swapPairs2 = function(head) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy;
  while (head && head.next) {
    let first = head;
    let second = head.next;

    prev.next = second;
    first.next = second.next;
    second.next = first;

    prev = first;
    head = first.next;
  }
  return dummy.next;
}