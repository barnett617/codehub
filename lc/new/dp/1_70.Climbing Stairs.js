// https://leetcode.com/problems/climbing-stairs/

// 思路：初始状态为1和2，后续状态都可以由前两个状态计算得出
// 每次计算完一个新的状态后，更新前两个状态值的变量

// TIME: O(n)
// SPACE: O(1)

function climbStairs(n) {
    if (n < 3) return n;
    let one = 1;
    let two = 2;
    for (let i = 3; i <= n; i++) {
        const cur = one + two;
        one = two;
        two = cur;
    }
    return two;
}