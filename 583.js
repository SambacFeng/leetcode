/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    let l1 = word1.length, l2 = word2.length
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

    return l1 + l2 - 2 * dp(0, 0)
};

/* 
    2021/8/23
    75 84
    本质上是LCS变种，要留下的公共部分即为LCS
*/