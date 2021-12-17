/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let res = numBottles
    while (numBottles >= numExchange) {
        numBottles -= numExchange
        res++
        numBottles++
    }
    return res
}

/* 
    2021/12/17
    56 35
    模拟 贪心
    有就换
*/