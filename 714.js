/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    let n = prices.length
    const dp = new Array(n + 1).fill(0).map(_ => new Array(2).fill(0))
    dp[0][0] = -prices[0]
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
        dp[i][1] = Math.max(dp[i - 1][0] + prices[i] - fee, dp[i - 1][1])
    }
    return dp[n - 1][1]
/*     let n = prices.length
    let memo = Array(n).fill(-1)

    const dp = start => {
        if (start === n) {
            return 0
        }
        if (memo[start] !== -1) {
            return memo[start]
        }
        let res = 0, currMin = prices[start]
        for (let sell = start + 1; sell < n; sell++) {
            currMin = Math.min(currMin, prices[sell])
            res = Math.max(res, dp(sell + 1) + prices[sell] - currMin - fee)
        }
        memo[start] = res
        return res
    }

    return dp(0) */
}

/* 
    2021/11/21
    26 20
    dp状态机
    相比122，卖出时获取的利润减去手续费即可
*/