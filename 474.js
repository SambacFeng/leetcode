/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    let count = []
    strs.forEach(e => {
        let zero = 0, one = 0
        for (let i = 0; i < e.length; i++) {
            e[i] === '0' ? zero++ : one ++
        }
        count.push([zero, one])
    })

    let dp = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0))
    for (let i = 0; i < strs.length; i++) {
        for (let j = m; j >= count[i][0]; j--) {
            for (let k = n; k >=count[i][1]; k--) {
                dp[j][k] = Math.max(dp[j][k], dp[j - count[i][0]][k - count[i][1]] + 1)
            }
        }
    }

    return dp[m][n]
}

/* 
    2021/11/16
    47 86
    dp
    二维01背包，1和0的个数是两个维度上的重量，m和n是两个维度上的容量
*/