function generateRandomArray(num, max = 100, min = 0) {
    let ans = [];
    let rand;
    for (var i = 0; i < num; i++) {
        do {
            rand = generateRandomNum();
        } while (ans.includes(rand))
        ans.push(rand)
    }
    return ans
}

function generateRandomNum(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min) + min)
}

export {
    generateRandomArray,
    generateRandomNum
}