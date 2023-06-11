function fun(j, s) {
    // find how many letter in a string
    // const sList = s.split('');
    // const jList = j.split('')
    // const passList = sList.filter(item => jList.indexOf(item) > -1)
    // return passList.length
    return s.split('').filter(stone => j.split('').indexOf(stone) > -1).length
}

function main() {
    var str = "aAAbbbb"
    var target = "aA"
    const out = console.log
    const ans = fun(target, str)
    out(ans)
}

main()
