function ListNode(val) {
    this.val = val;
    this.next = null;
}
var swapPairs = function(head) {
    let dummy = new ListNode(0);
    [dummy.next, head] = [head, dummy];
    while (head.next && head.next.next) {
        let n1 = head.next, n2 = head.next.next;
        [head.next, n1.next, n2.next, head] = [n2, n2.next, n1, n1];
    }
    return dummy.next;
}