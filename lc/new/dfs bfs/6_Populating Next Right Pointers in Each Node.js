// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

// 思路：创建一个leftmost节点作为最左节点用于向下遍历
// 创建一个head节点用于遍历同层节点
// 如果当前层右侧有子树，则需要将子树之间进行连接

// TIME: O(n)
// SPACE: O(1)

function connect(root) {
    if (!root) return root;

    let leftmost = root;
    while (leftmost.left) {
        let head = leftmost;
        while (head) {
            head.left.next = head.right;
            if (head.next) {
                head.right.next = head.next.left;
            }
            head = head.next;
        }
        leftmost = leftmost.left;
    }
    return root;
}