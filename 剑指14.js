/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function (n) {
    if (n < 4) return n - 1
    let dp = Array(n + 1)
    dp[1] = 1, dp[2] = 2, dp[3] = 3
    let res = 0
    for (let i = 4; i <= n; i++) {
        let subRes = 0
        for (let j = 1; j <= i / 2; j++) {
            subRes = Math.max(subRes, dp[j] * dp[i - j])
        }
        dp[i] = subRes
    }
    return dp[n]
}