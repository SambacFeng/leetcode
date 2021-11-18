/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if (k === 0 || prices.length === 0) return 0
    let n = prices.length
    let dp = new Array(n).fill(0).map(_ => new Array(2 * k + 1).fill(0))
    for (let i = 0; i < k; i++) {
        dp[0][i * 2 + 1] = -prices[0]
    }
    for (let i = 1; i < n; i++) {
        dp[i][0] = dp[i - 1][0]
        for (j = 0; j < k; j++) {
            dp[i][2 * j + 1] = Math.max(dp[i - 1][2 * j] - prices[i], dp[i - 1][2 * j + 1])
            dp[i][2 * j + 2] = Math.max(dp[i - 1][2 * j + 1] + prices[i], dp[i - 1][2 * j + 2])
        }
    }
    return dp[n - 1][k * 2]
/*     let n = prices.length
    let memo = Array(n).fill(-1).map(_ => Array(k + 1).fill(-1))

    const dp = (start, k) => {
        if (start === n || k === 0) {
            return 0
        }
        if (memo[start][k] !== -1) {
            return memo[start][k]
        }
        let res = 0, currMin = prices[start]
        for (let sell = start + 1; sell < n; sell++) {
            currMin = Math.min(currMin, prices[sell])
            res = Math.max(res, dp(sell + 1, k - 1) + prices[sell] - currMin)
        }
        memo[start][k] = res
        return res
    }

    return dp(0, k) */
};

/* 
    2021/11/19
    34 36
    dp
    把123题的内层改为循环
*/

let arr = [2,4,1], k = 2
maxProfit(k, arr)

/* 
    2021/9/1
    5 83
    尽管跑得很慢。。但是过了，应该是有更好的解法
    与不限制次数的122题相比，将memo扩充为二维，dp增加k为参数，每次买卖后k - 1，k为0时返回0
*/