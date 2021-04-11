var lemonadeChange = function(bills) {
    let five = 0, ten = 0;
    for (let bill of bills) {
        if (bill === 5) {
            five++;
        } else if (bill === 10) {
            if (five) {
                five--;
                ten++;
            } else {
                return false;
            }
        } else {
            if (ten && five) {
                ten--;
                five--;
            } else if (five > 2) {
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
}