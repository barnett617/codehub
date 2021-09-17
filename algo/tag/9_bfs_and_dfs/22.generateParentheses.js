var generateParenthesis = function(n) {
    let res = [];
    var helper = function(left, right, n, item) {
        if (left === n && right === n) {
            return res.push(item);
        }
        if (left < n) {
            helper(left + 1, right, n, item + '(');
        }
        if (right < left) {
            helper(left, right + 1, n, item + ')');
        }
    }
    helper(0, 0, n, '');
    return res;
}