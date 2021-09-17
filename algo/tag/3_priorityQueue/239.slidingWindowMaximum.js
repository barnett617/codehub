var maxSlidingWindow = function(nums, k) {
    // 对首在左，队尾在右
    let window = [], res = [];
    nums.forEach((x, i) => {
        // window[0]是队首，当索引大于等于队首加上窗口大小
        // 则意味着超出窗口大小，此时队首需要出队
        if (window.length > 0 && i >= window[0] + k) {
            // 队首出队
            window.shift();
        }
        // 当新元素大于等于队尾元素，则队尾出队（双端队列特性）
        while (window.length > 0 && x >= nums[window[window.length - 1]]) {
            window.pop();
        }
        // 队尾入队
        window.push(i);
        // 只要索引大于等于窗口大小，就需要开始计算当前窗口内最大值
        if (i >= k - 1) {
            // 由于新元素入队前都会和对内元素进行比较
            // 如果对内元素小于新元素就会出队
            // 所以队首永远是最大的
            res.push(nums[window[0]]);
        }
    })
    return res;
}

function main() {
    let input = [1, 3, -1, -3, 5, 3, 6, 7];
    let output = maxSlidingWindow(input, 3);
    console.log('output', output);
}
main();