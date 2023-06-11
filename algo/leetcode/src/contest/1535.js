/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    var winner = {}
    var winnerIndex, loserIndex
    while(true) {
        if (arr[0].toString().length === Math.max(...(arr.map(item => item.toString())))) return arr[0]
        if (arr[0] === Math.max(...arr)) return arr[0]
        if (arr[0] > arr[1]) {
            winnerIndex = 0;
            loserIndex = 1;
        } else {
            winnerIndex = 1;
            loserIndex = 0;
        }
        winner[arr[winnerIndex]] !== undefined ? winner[arr[winnerIndex]] += 1 : winner[arr[winnerIndex]] = 1
        if (winner[arr[winnerIndex]] === k) return arr[winnerIndex]
        if (winnerIndex === 1) {
            arr = arr.slice(winnerIndex).concat([arr[loserIndex]])
        } else {
            var temp = arr[loserIndex]
            arr.splice(loserIndex, 1)
            arr.push(temp)
        }
    }
};

console.log(getWinner([34788,85905,81360,8923,49249,85954,84960,90406,23959,93126,77691,19061,70112,65691,37510,78857,94684,42688], 2))