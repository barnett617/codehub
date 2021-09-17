var minimumTotal = function(triangle) {

    // 解法一：递归(会超时)
    let helper = function(i, j) {
        let len = triangle.length;
        if (i >= len || j >= triangle[i].length) return 0;
        let left = helper(i + 1, j);
        let right = helper(i + 1, j + 1);
        return Math.min(left, right) + triangle[i][j];
    }
    return helper(0, 0);

    // 解法二：递归增加缓存
    let helper = function(i, j, memo) {
        let len = triangle.length;
        if (i >= len || j >= triangle[i].length) return 0;
        if (memo[i][j]) return memo[i][j];
        let left = helper(i + 1, j, memo);
        let right = helper(i + 1, j + 1, memo);
        let res = Math.min(left, right) + triangle[i][j];
        memo[i][j] = res;
        return res;
    }

    return helper(0, 0, new Array(triangle.length).fill().map(item => []));

    // 解法三：自底向上，二维数组记录每层状态
    let len = triangle.length;
    let res = new Array(len);
    res[len - 1] = triangle[len - 1];
    for (let i = len - 2; i >= 0; i--) {
        res[i] = new Array(triangle[i].length);
        for (let j = 0; j < triangle[i].length; j++) {
            res[i][j] = triangle[i][j] + Math.min(res[i + 1][j], res[i + 1][j + 1]);
        }
    }
    return res[0][0];

    // 解法四：自底向上，将状态压缩为一维数组
    let len = triangle.length;
    let res = triangle[len - 1];
    for (let i = len - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            res[j] = Math.min(res[j], res[j + 1]) + triangle[i][j];
        }
    }
    return res[0];

}