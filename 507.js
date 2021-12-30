/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    if (num === 1) return false
    let sum = 1
    /*     for (let i = 1; i <= num / 2; i++) {
            if (!(num % i)) sum += i
        } */
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (!(num % i)) {
            sum += i
            if (i * i < num) {
                sum += Math.floor(num / i)
            }
        }
    }
    return sum === num
}

/* 
    2021/12/31
    1. 循环到 n / 2，每次累加，52 30
    2. 循环到 sqrt(n)，每次累加两个，94 17
    数学
    上来没看题想复杂了写了个素数筛。。
*/