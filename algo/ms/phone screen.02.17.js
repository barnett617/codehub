// [4,6,8,9,3,2,1]

// 正数
// 数量没有限制

// 输出，买入点、卖出点、最大收益


// [4,6,8,9,1,2,3]
// [1,2,3,4]
// [4,3,2,1]
// []
// [1,1,1,1]

// 4,6 -> 2
// 4,8 -> 4
// 4,9 -> 5
// 4,1 -> -3

// 只买一次，卖一次

function maxProfit(nums) {
    // TODO 输入判空

    let max = 0;  
    let buyIndex = 0;
    let sellIndex = 0;
    
    let curMinIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[curMinIndex]) {
            curMinIndex = i;
        } else {
            const curProfit = nums[i] - nums[curMinIndex];
            if (curProfit > max) {
                if (curMinIndex !== buyIndex) {
                    buyIndex = curMinIndex;
                }
                sellIndex = i;
                max = curProfit;
            }
        }
    }

    if (max <= 0) return [-1, -1, 0];
    return [buyIndex, sellIndex, max];
}

// 搜索panel
// bing edge
// answer segament 
// ASK
// Bing

// rich result

// 收集feedback

// Frontend 