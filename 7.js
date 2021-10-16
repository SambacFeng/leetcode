/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let res = parseInt(x.toString().split('').reverse().join(''))
    if (x < 0)
        res = - res
    return res > 2147483647 || res < -2147483648 ? 0 : res
}

/* 
    2021/10/16
    68 72
    简单题错了两次。。要提高警惕
*/