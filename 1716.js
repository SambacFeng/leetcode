/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let res = 0
    let money = 1
    let count = 0
    for (let i = 1; i <= n; i++) {
        res += money
        money++
        count++
        if (count === 7) {
            count = 0
            money -= 6
        }
    }
    return res
}

/* 
    2022/01/15
    35 99
    模拟
*/