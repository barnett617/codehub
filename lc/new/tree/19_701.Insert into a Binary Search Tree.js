// https://leetcode.com/problems/insert-into-a-binary-search-tree/

// 思路：递归判断当前值是更小还是更大，如果更小，则插入左子树，如果更大则插入右子树

function insertIntoBST(root, val) {
    if (!root) return new TreeNode(val);
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }
    return root;
}

// 以根节点作为当前节点，如果目标值比当前节点小，则不断遍历左子树，否则遍历右子树，当子节点为空时插入

function insertIntoBST(root, val) {
    let cur = root;
    while (cur) {
        if (val < cur.val) {
            if (!cur.left) {
                cur.left = new TreeNode(val);
                return root;
            } else {
                cur = cur.left;
            }
        } else {
            if (!cur.right) {
                cur.right = new TreeNode(val);
                return root;
            } else {
                cur = cur.right;
            }
        }
    }
    return new TreeNode(val);
}