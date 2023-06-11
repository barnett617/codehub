/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // 有很多待优化点
    // 比如对于是否进位的判断， 改为是否加和大于1即可
    // 比如结果的收集，用字符串拼接即可
    let longer, shorter;
    let addFlag = 2;
    function handleArr (arr) {
        let result = []
        let temp = arr.split('').reverse();
        temp.forEach(element => {
            result.push(Number(element))
        });
        return result
    }
    if (a.length >= b.length) {
        longer = handleArr(a);
        shorter = handleArr(b);
    } else {
        longer = handleArr(b);
        shorter = handleArr(a);
    }
    let result = [];
    let flag = 0;
    for (let i = 0; i < longer.length; i++) {
        if (shorter[i] !== undefined) {
            if (flag) {
                if ( (longer[i] + shorter[i] + flag) / addFlag >= 1 ) {
                    result.unshift( (longer[i] + shorter[i] + flag ) % addFlag)
                    flag = 1;
                } else {
                    result.unshift( longer[i] + shorter[i] + flag );
                    flag = 0;
                }
            } else {
                if ( (longer[i] + shorter[i]) / addFlag >= 1 ) {
                    result.unshift( ( longer[i] + shorter[i] ) % addFlag )
                    flag = 1;
                } else {
                    result.unshift( longer[i] + shorter[i] )
                    flag = 0;
                }
            }
        } else {
            if (flag) {
                if ( (longer[i] + flag) / addFlag >= 1 ) {
                    result.unshift((longer[i] + flag) % addFlag);
                    flag = 1;
                } else {
                    result.unshift(longer[i] + flag);
                    flag = 0;
                }
            } else {
                result.unshift(longer[i])
            }
        }
    }
    if (flag) {
        result.unshift(flag);
    }
    return result.join('');

    // // 利用 js 新特性的解法
    // // 将目标字符串数字转换为 BigInt 类型数字
    // let tempA = BigInt(`0b${a}`);
    // let tempB = BigInt(`0b${b}`);
    // // 利用 BigInt.prototype.toString(n) 可以将 BigInt 类型数字转换为指定进制的数字
    // let tempResult = (tempA + tempB).toString(2);
    // return tempResult

    // 比较好的解法
    // let i = a.length - 1, j = b.length - 1, res = '', carry = 0;
    // while(i >= 0 || j >= 0 || carry) {
    //     let num1 = +a[i] || 0, num2 = +b[j] || 0;
    //     let sum = num1 + num2 + carry;
    //     res = sum % 2 + res;
    //     carry = sum > 1;
    //     i--;
    //     j--;
    // }
    // return res
};
addBinary("1010", "1011")
// 错了很多次
// 少考虑了有进一时的情况，当前加法也要加上进1
// @lc code=end

