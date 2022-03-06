// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

// 思路：使用哨兵节点指向头结点，将前置节点初始化为哨兵节点
// 当前节点不为空，则持续遍历，如果下一节点与当前节点值不同，则右移前置节点和当前节点
// 如果下一节点与当前节点值相同，则持续移动当前节点，直至下一节点与当前节点值不同
// 然后将前置节点的下一节点跳过当前节点，指向再下一个节点，并更新当前节点也为该节点并继续

// TIME: O(n)
// SPACE: O(1)

function deleteDuplicates(head) {
    const dummy = new ListNode(0, head);
    let prev = dummy;
    let cur = head;
    while (cur) {
        if (cur.next && cur.next.val === cur.val) {
            while (cur.next && cur.next.val === cur.val) {
                cur.next = cur.next.next;
            }
            prev.next = cur.next;
            cur = cur.next;
        } else {
            prev = prev.next;
            cur = cur.next;
        }
    }
    return dummy.next;
}