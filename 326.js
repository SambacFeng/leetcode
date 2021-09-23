/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n <= 0) return false
    while (n > 3) {
        if (n % 3) return false
        n = Math.floor(n / 3)
    }
    return n !== 2
}

/* 
    2021/9/23
    98 32
    复建了属于是，错了一次，人生污点
*/