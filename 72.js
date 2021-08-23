/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    let l1 = word1.length, l2 = word2.length
    let memo = Array(l1).fill(9999).map(x => Array(l2).fill(9999))

    const dp = (i, j) => {
        if (i === -1) {
            return j + 1
        }
        if (j === -1) {
            return i + 1
        }
        if (memo[i][j] !== 9999) {
            return memo[i][j]
        }
        if (word1[i] === word2[j]) {
            memo[i][j] = dp(i - 1, j - 1)
        } else {
            memo[i][j] = Math.min(dp(i, j - 1), dp(i - 1, j), dp(i - 1, j - 1)) + 1
        }
        return memo[i][j]
    }

    return dp(l1 - 1, l2 - 1)
};

/* 
    2021/8/23
    92 69
    (i, j) =    {
                    (i - 1, j - 1) // word1i === word2j
                    Math.min((i, j - 1), (i - 1, j), (i - 1, j - 1))
                }
    dp在两字符不相等时的三种子情况分别对应着增、删、改
    在word1上增加相当于i不变，j向前一位
    在word1上删除相当于i向前一位，j不变
    在word1上修改相当于修改后word1i === word2j，同时向前一位，但是操作数要加1

    另有dp数组table解法
    62 27
    let l1 = word1.length, l2 = word2.length
    let dp = Array(l1 + 1).fill(0).map(x => Array(l2 + 1).fill(0))
    for (let i = 1; i <= l1; i++) {
        dp[i][0] = i
    }
    for (let j = 1; j <= l2; j++) {
        dp[0][j] = j
    }

    for (let i = 1; i <= l1; i++) {
        for (let j = 1; j <= l2; j++) {
            dp[i][j] = word1[i - 1] === word2[j - 1] ? dp[i][j] = dp[i - 1][j - 1] : Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        }
    }

    return dp[l1][l2]

    正常递归dp是自上而下(以i === 0 || j === 0为base case)，dp table是自底向上，从dp[0][0]开始逐渐增大
    对于两字符串的dp问题均可以用两个指针来进行dp
*/