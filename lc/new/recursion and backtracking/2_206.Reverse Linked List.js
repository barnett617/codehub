// https://leetcode.com/problems/reverse-linked-list/

// 思路：创建一个前置节点，并初始化为空
// 创建一个当前节点用于跟踪链表的遍历
// 不断将下一节点暂存起来，然后将下一指针指向前置节点，并向后推进
// 最后返回前置节点

// TIME: O(n)
// SPACE: O(1)

function reverseList(head) {
    let prev = null;
    let cur = head;
    while (cur) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}

// 思路：使用反转函数递归处理下一节点，当前节点为空，或没有下一节点时，都直接返回该节点
// 否则将下一节点递归进行反转，反转返回的即是新的上一节点
// 使用当前节点的下一节点，即递归的部分，其下一节点指向当前节点，即完成递归部分和当前节点的反转
// 并且将当前节点作为新链表尾，则下一节点需要指向空
// 最后返回新生成的链表头即可

function reverseList(head) {
    if (!head || !head.next) return head;
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}