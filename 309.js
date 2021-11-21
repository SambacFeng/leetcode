/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length
    let dp = new Array(n + 1).fill(0).map(_ => new Array(4).fill(0))
    /* 
        0 未持有可买入
        1 持有不动/买入
        2 持有卖出
        3 冷冻期
    */
    dp[0][1] = -prices[0]
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][3])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i], dp[i - 1][3] - prices[i])
        dp[i][2] = dp[i - 1][1] + prices[i]
        dp[i][3] = dp[i - 1][2]
    }

    return Math.max(dp[n - 1][0], dp[n - 1][2],dp[n - 1][3])
/*     let n = prices.length
    let memo = Array(n).fill(-1)

    const dp = start => {
        if (start >= n) {
            return 0
        }
        if (memo[start] !== -1) {
            return memo[start]
        }
        let res = 0, currMin = prices[start]
        for (let sell = start + 1; sell < n; sell++) {
            currMin = Math.min(currMin, prices[sell])
            res = Math.max(res, dp(sell + 2) + prices[sell] - currMin)
        }
        memo[start] = res
        return res
    }

    return dp(0) */
};

/* 
    2021/8/31
    6 63
    122题小改，卖出后从dp(sell + 1)改为dp(sell + 2)，结束dp的basecase改为start >= n(避免+2的时候加出去)
    2021/11/21
    5 54
    换用状态机dp，用时减半，百分比应该是误差
*/