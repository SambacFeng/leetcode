/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function (n) {
    if (n < 4) return n - 1
    const max = 1e9 + 7
    let res = 1
    while (n >= 4) {
        res = res % max * 3
        n = n - 3
    }
    if (n === 1) return res * 4 / 3 % max
    else return res * n % max
};

/* 
    2021/9/11
    87 84
    n的规模用不着快速幂，滚动求余即可
*/