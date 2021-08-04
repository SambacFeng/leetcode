/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n < 2) {
        return n
    }
    let p = 0, q = 1, r = 0
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
    写过的fib罢了，打表天下第一
*/