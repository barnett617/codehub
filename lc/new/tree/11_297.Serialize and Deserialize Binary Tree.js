// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
// 思路：使用字符串存储每个节点的值，如果是空节点，则记录null字符串
// 每个节点后面跟一个逗号分隔符

// 思路：将字符串按照分隔符拆分成数组
// 遍历数组的每一项并生成树节点，如果某一项为null字符串，则清除该项并返回空节点
// 如果某一项不为空，则生成节点，并从列表中删除该项，然后依次将后续节点生成左右子树

function serialize(root) {
    let res = '';
    function helper(root) {
        if (!root) res += 'null,';
        res += root.val + ',';
        helper(root.left);
        helper(root.right);
    }
    helper(root);
    return res;
}

function deserialize(root) {
    const list = root.split(',');
    function helper(list) {
        if (list[0] === 'null') {
            list.shift();
            return null;
        }
        const node = new TreeNode(Number(list[0]));
        list.shift();
        const l = helper(list);
        const r = helper(list);
        node.left = l;
        node.right = r;
        return node;
    }
    return helper(list);
}