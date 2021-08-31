/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length
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

    return dp(0)
};

/* 
    2021/8/31
    6 63
    122题小改，卖出后从dp(sell + 1)改为dp(sell + 2)，结束dp的basecase改为start >= n(避免+2的时候加出去)
*/