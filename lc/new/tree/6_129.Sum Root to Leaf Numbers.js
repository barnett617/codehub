// https://leetcode.com/problems/sum-root-to-leaf-numbers/

// 思路：递归遍历，将每条路径上的节点值进行累加，当遍历到叶子节点时，将该路径所形成的数字累加总和上

function sumNumber(root) {
    let res = 0;
    if (!root) return res;

    function helper(root, curNum) {
        curNum += root.val;
        if (!root.left && !root.right) {
            res += curNum;
        }
        if (root.left) {
            helper(root.left, curNum * 10);
        }
        if (root.right) {
            helper(root.right, curNum * 10);
        }
    }
    helper(root, 0);

    return res;
}

// 思路：递归的过程中，节点可以传空，所以递归开始先判断节点是否为空
function sumNumber(root) {
    let res = 0;
    function helper(root, curNum) {
        if (!root) return;
        curNum = curNum * 10 + root.val;
        if (!root.left && !root.right) {
            res += curNum;
        }
        helper(root.left, curNum);
        helper(root.right, curNum);
    }
    helper(root, 0);
    return res;
}