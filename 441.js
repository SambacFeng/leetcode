/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2)
}

/* 
    2021/10/10
    52 79
    小学数学时间到，解一元二次方程
    就让人回想起noip2017的惨痛经历...
*/