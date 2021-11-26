/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    const m = s.length, n = t.length
    const dp = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0))
    dp.forEach(e => e[0] = 1)
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[m][n]
}

/* 
    2021/11/26
    57 6
    DP
    出现连续相同可匹配的字符时可以任选一个进行匹配，所以在状态转移过程中要+dp[i-1][j]
*/