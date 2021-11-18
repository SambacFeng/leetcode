/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length
    let dp = new Array(n).fill(0).map(_ => new Array(5).fill(0))
    dp[0][1] = -prices[0]
    dp[0][3] = -prices[0]
    for (let i = 1; i < n; i++) {
        dp[i][0] = dp[i - 1][0]
        dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1])
        dp[i][2] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][2])
        dp[i][3] = Math.max(dp[i - 1][2] - prices[i], dp[i - 1][3])
        dp[i][4] = Math.max(dp[i - 1][3] + prices[i], dp[i - 1][4])
    }

    return Math.max(dp[n - 1][0], dp[n - 1][2], dp[n - 1][4])


/*     let n = prices.length, k = 2
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
    沿用188题思路把k设置为2，被最后巨长的测试用例卡了
    2021/11/18
    24 24
    dp
    使用状态转移的dp，0代表未买入，1为第一次买入，2为第一次卖出，以此类推
*/