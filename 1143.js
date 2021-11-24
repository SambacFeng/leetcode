/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) { 
    let m = text1.length, n = text2.length
    let dp = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0))
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
            }
        }
    }
    return dp[m][n]
/*     let l1 = text1.length, l2 = text2.length
    let memo = Array(l1).fill(-1).map(x => Array(l2).fill(-1))

    const dp = (i, j) => {
        if (i === l1 || j === l2) {
            return 0
        }
        if (memo[i][j] !== -1) {
            return memo[i][j]
        }
        if (text1[i] === text2[j]) {
            memo[i][j] = 1 + dp(i + 1, j + 1)
        } else {
            memo[i][j] = Math.max(dp(i + 1, j), dp(i, j + 1))
        }
        return memo[i][j]
    }

    return dp(0, 0) */
};

/* 
    2021/8/23
    71 44
    memo[i][j] =    {
                        memo[i+1][j+1] + 1 // s1[i]===s2[j]
                        max(memo[i+1][j], memo[i][j+1]) // else
                    }

    Array(m).fill(-1).map(x => Array(n).fill(-1))创建了一个m行n列的二维数组

    2021/11/25更新
    79 51
    换用了自底向上的dp数组
*/

// let memo = Array(4).fill(9).map(x => Array(5).fill(2))
console.log(longestCommonSubsequence("abcde","ace"));