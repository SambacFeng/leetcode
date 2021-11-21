/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0, currMin = prices[0]

    for (let sell = 1; sell < prices.length; sell++) {
        currMin = Math.min(currMin, prices[sell])
        res = Math.max(res, prices[sell] - currMin)
    }

    return res
};

/* 
    2021/8/31
    73 56
    从前向后遍历可能的卖出时间，并记录在卖出时间前可用的最小买入价格，计算最大利润
    相比遍历买入时间并在循环内向后遍历，省一遍遍历，N^2 ==> N

    2021/1118
    5 5 
    更新dp
    let n = prices.length
    let dp = new Array(n + 1).fill(0).map(_ => new Array(2).fill(0))
    dp[0][0] = -prices[0]
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    }
    
    return dp[n - 1][1]

    使用滚动数组进行状态压缩
    20 47
    let n = prices.length
    let hold = -prices[0], free = 0
    for (let i = 1;i < n; i++) {
        let lastHold = hold, lastFree = free
        hold = Math.max(lastHold, -prices[i])
        free = Math.max(lastFree, lastHold + prices[i])
    }

    return free
*/