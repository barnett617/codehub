/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    // var ans = 0
    // while (num != 0) {
    //     if (num % 2 === 1) { 
    //         num = num - 1
    //     } else {
    //         num = num >> 1
    //     }
    //     ans++
    // }
    // return ans

    // if (num === 0) return num
    // var ans = 0
    // num = num.toString(2)
    // for (const item of num) {
    //     if (item === 1) {
    //         ans+=2
    //     } else {
    //         ans+=1
    //     }
    // }
    // return ans-1

    console.log((14).toString(2))

    if (num === 0) return num
    var ans = 0;
    var flag = 1;
    while (flag <= num) {
        const temp = flag & num
        if (temp !== 0) {
            ans = ans + 2;
        } else {
            ans = ans + 1;
        }
        flag = flag * 2
    }
    return ans - 1
};

const out = console.log
const ans = numberOfSteps(14)
out(ans)
// numberOfSteps(123)