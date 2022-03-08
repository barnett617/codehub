// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

// 思路：使用递归中序遍历节点元素到数组中然后取k-1项
// 或者使用栈遍历每个节点，并用累加变量记录遍历到的第N项，当满足目标位置时返回

// TIME: O(n)
// SPACE: O(n)

function kthSmallest(root, k) {
    const orderList = [];
    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        orderList.push(root.val);
        dfs(root.right);
    }
    dfs(root);
    return orderList[k - 1];
}

// TIME: O(H+k)
// SPACE: O(H)
function kthSmallest(root, k) {
    let cur = root;
    const stack = [];
    let n = 1;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        if (n === k) return cur.val;
        n++;
        cur = cur.right;
    }
}