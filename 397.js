/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
    let res = 0
    while (n !== 1) {
        if (n % 2 === 0) {
            n /= 2
        } else if (n % 4 === 1) {
            n--
        } else {
            if (n === 3) return res + 2
            else n++
        }
        res++
    }
    return res
/*     let dp = new Array(2 * n + 1).fill(Number.MAX_SAFE_INTEGER)
    dp[1] = 1
    for (let i = 2; i <= 2 * n; i++) {
        if (i % 2) {
            dp[i] = Math.min(dp[i - 1], dp[i + 1]) + 1
        } else {
            dp[i] = Math.min(dp[i / 2], dp[])
        }
    }
    return dp[n] */
}

/* 
    2021/11/19
    79 74
    贪心
    每次判断是否为2的倍数，不是的话尽量向4的倍数靠近，因为4的倍数能更快的连续减半，注意处理n === 3的情况，此时应该连续向下-1而不是+1向4靠近
*/