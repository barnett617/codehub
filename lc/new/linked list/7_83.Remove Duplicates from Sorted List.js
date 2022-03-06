// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

// 思路：当连着两个节点都不为空时，判断是否节点值相同，如果相同则跳过
// 否则正常迭代

// TIME: O(n)
// SPACE: O(1)

function deleteDuplicates(head) {
    let cur = head;
    while (cur && cur.next) {
        if (cur.next.val === cur.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
}