/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    if (n <= 1) return 1
    if (n === 2) return 2
    let dp = new Array(n + 1)
    dp[0] = dp[1] = 1, dp[2] = 2
    for (let i = 3; i <= n; i++) {
        let res = 0
        for (let j = 0; j < i; j++) {
            res += dp[j] * dp[i - 1 - j]
        }
        dp[i] = res
    }
    return dp[n]
}

/* 
    2021/11/11
    22 34
    dp
    dp table
*/