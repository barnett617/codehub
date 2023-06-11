/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    if (arr.length < 3) return false
    var count = 0;
    let result = false;
    result = arr.some((item, index) => {
        if (item % 2 === 1 && count >= 0) {
            if (++count === 3) return true
        } else {
            count = 0
        }
    })
    return result
};