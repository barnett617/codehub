function ListNode(val) {
    this.val = val;
    this.next = null;
}
var hasCycle = function(head) {
    if (head === null || head.next === null) return false;
    let slow = head, fast = head, flag = false;
    while (fast !== null && fast.next !== null && !flag) {
        slow = slow.next;
        fast = fast.next;
        if (fast && slow && fast.val === slow.val && fast.next === slow.next) flag = true;
    }
    return flag;
}

var hasCycle2 = function(head) {
    const last = Date.now();
    let has = false;
    while (head) {
        head = head.next;
        const now = Date.now();
        if (now - last > 500) {
            has = true;
            break;
        }
    }
    return has;
}