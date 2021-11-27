/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    const m = word1.length, n = word2.length
    const dp = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0))
    for (let i = 0; i <= m; i++) dp[i][0] = i
    for (let j = 0; j <= n; j++) dp[0][j] = j
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 2)
            }
        }
    }
    return dp[m][n]
/*     let l1 = word1.length, l2 = word2.length
    let memo = Array(l1).fill(-1).map(x => Array(l2).fill(-1))

    const dp = (i, j) => {
        if (i === l1 || j === l2) {
            return 0
        }
        if (memo[i][j] !== -1) {
            return memo[i][j]
        }
        if (word1[i] === word2[j]) {
            memo[i][j] = dp(i + 1, j + 1) + 1
        } else {
            memo[i][j] = Math.max(dp(i + 1, j), dp(i, j + 1))
        }
        return memo[i][j]
    }

    return l1 + l2 - 2 * dp(0, 0) */
};

/* 
    2021/8/23
    75 84
    本质上是LCS变种，要留下的公共部分即为LCS

    2021/11/27补充
    65 21
    换用自底向上的迭代dp，dp[i][j]表示以以i-1为结尾的字符串word1，和以j-1位结尾的字符串word2，想要达到相等，所需要删除元素的最少次数
    dp[i][j] = {
        dp[i - 1][j - 1]    w1[i]==w2[j]
        min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1] + 2)   w1[i]!==w2[j] // 删w1，删w2，都删
    }
*/

minDistance("a", "b")
