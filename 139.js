/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let n = s.length
    let dp = Array(n + 1).fill(false)
    dp[0] = true

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < wordDict.length; j++) {
            let len = wordDict[j].length
            if (i >= len) {
                if (s.slice(i - len, i) === wordDict[j] && dp[i - len]) dp[i] = true
            }
        }
    }

    return dp[n]
}

/* 
    2021/11/17
    56 70
    dp
    完全背包
*/

let arr = ["ab", "cd"]
let s = "abcd"
wordBreak(s, arr)