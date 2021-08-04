/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    if (n < 2) {
        return 1
    }
    let p = 1, q = 1, r = 0
    for (let i = 2; i <= n; i++) {
        r = p + q
        if (r > 1000000007) {
            r %= 1000000007
        }
        p = q
        q = r
    }
    return r
};

/* 
    2021/8/4
    看到一个奇怪的写法
    let p = 0, c = 1
    while (n--) [p, c] = [c, (p + c) % 1000000007]
    return c
    尝试理解后倒还挺简单的。。甚至省了点空间
*/