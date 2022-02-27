// https://leetcode.com/problems/combinations/

// 思路：创建一个回溯函数用于递归生成组合，将生成的组合不断更新，直至长度符合预期，则进行记录
// 每当形成一个有效组合后，则可以将本次尝试的索引清除，并以下一个索引继续尝试

function combine(n, k) {
    const res = [];
    function backtrack(index, curList) {
        if (curList.length === k) {
            res.push(curList.slice());
            return;
        }
        for (let i = index; i <= n; i++) {
            curList.push(i);
            backtrack(i + 1, curList);
            curList.pop();
        }
    }
    backtrack(1, []);
    return res;
}