/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if (n === 1 || n === 2) {
        return n
    } 
    let pre = 1, curr = 2
    for (let i = 3; i <= n; i++) {
        let tmp = curr
        curr += pre
        pre = tmp
    }
    return curr
};

/* 
    2021/8/16
    fib
*/