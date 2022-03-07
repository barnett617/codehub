// https://leetcode.com/problems/jump-game/

// 思路：以最后位置为目标，倒叙观察每个位置是否能达到目标
// 达到目标的前提是该位置的值足以使得该位置跳到下一个位置，即该位置的值大于等于两个位置索引的差值
// 如果某个位置能达到，则设为新的目标，去迭代再前一个位置
// 最终如果前一个位置到达初始位置，则证明初始位置能达到最终位置

// TIME: O(n)
// SPACE: O(1)

function canJump(nums) {
    let target = nums.length - 1;
    for (let i = target; i >= 0; i--) {
        if (nums[i] >= target - i) target = i;
    }
    return target === 0;
}