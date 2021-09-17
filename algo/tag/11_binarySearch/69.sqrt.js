var mySqrt = function(x) {
    let l = 0, r = x, res;
    while (l <= r) {
        let mid = l + ((r - l) >> 1);
        if (mid === Math.floor(x / mid)) {
            return mid;
        } else if (mid > Math.floor(x / mid)) {
            r = mid - 1;
        } else {
            l = mid + 1;
            res = mid;
        }
    }
    return res;
}

var mySqrt2 = function(x, prec) {
    let l = 0, r = x;
    while (l <= r) {
        if ((r - l) <= Number(`1e-${prec}`)) {
            return l.toFixed(prec);
        }
        // 这里不能用位运算，因为位运算会取整，这里需要保持有小数位
        let mid = l + ((r - l) / 2);
        let y = mid * mid;
        if (y > x) {
            r = mid;
        } else if (y < x) {
            l = mid;
        }
    }
}

var mySqrt3 = function(x) {
    let r = x;
    while (r * r > x) {
        r = (r + x / r) / 2;
    }
    return r;
}

function main() {
    // console.log(mySqrt(8));

    // const ans = mySqrt2(5, 2);
    // console.log('ans', ans);
    // console.log('x', ans * ans);

    // const ans = mySqrt2(8, 9);
    // console.log('ans', ans);
    // console.log('x', ans * ans);

    const ans = mySqrt3(8, 9);
    console.log('ans', ans);
    console.log('x', ans * ans);
}
main();