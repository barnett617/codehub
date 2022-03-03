// 大数相乘

// 有可能负数
// 整数
// 有可能是0

// 234 567
// 234 9
// -123 232
// 1 2 -> 2
// 11 2 -> 10 * 2 + 1 * 2
// 12 34 -> 2 * 4 + 2 * 30 + 10 * 4 + 10 * 30 -> 
// 323213132 12321312312 -> 4
// 1000000 * 2 + 200000 * 3 -> 

// 123 * 3 -> 3 * 3    2 * 3 * 10   1 * 3 * 100
// 12300000 * 3 
// 1234567888888888 * 3 -> 8 * 3 + 7 * 3()

//    1 2 3 4 5 8 8 8 8 8 8 8
//                          3

//     1    2   3
//     1    4   5

//     

// '12345'
//   '899'

// '23'
// '5678'

function calcAdd(a, b) {
    let sum = 0;
    let carry = 0;
    let resStr = '';
    // for (let i = a.length - 1; i >= 0; i--) {
    //     const chA = a[i];
    //     for (let j = b.length - 1; j >= 0; j--) {
    //         const chB = b[j];
    //         sum += chA * 1 + chB * 1;
    //         const rest = sum % 10;
    //         resStr = resStr + rest.toString();

    //         carry = sum / 10;
    //     }
    // }

    let longerNum = a.length > b.length ? a : b;
    let carry = 0;
    let res = '';
    // 543
    //   9

    for (let i = longerNum.length; i >= 0; i--) {
        if (a[i])
        const sum = a[i] * 1 + b[i] * 1 + carry;
        carry = 0;
        if (sum / 10 > 0) {
            carry = sum / 10;
        }
        res = (sum % 10) + res;
    }
    if (carry > 0) {
        res = '' + carry + res;
    }
    return res;
}

function calc(a, b) {
    for (const ch of a) {

    }
}