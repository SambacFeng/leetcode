/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let five = 0, ten = 0
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            five++
        } else if (bills[i] === 10) {
            if (five) {
                five--
                ten++
            } else {
                return false
            }
        } else {
            if (ten) {
                if (five) {
                    five--
                    ten--
                } else {
                    return false
                }
            } else if (five >= 3){
                five -= 3
            } else {
                return false
            }
        }
    }
    return true
}

/* 
    2021/11/10
    13 85
    贪心
    有十块找十块，没十块找五块，不够找就false
*/