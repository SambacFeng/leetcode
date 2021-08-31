/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

};

/* 
    2021/8/31
    6 5
    let n = prices.length
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
            res = Math.max(res, dp(sell + 1) + prices[sell] - currMin)
        }
        memo[start] = res
        return res
    }
    return dp(0)
    对于每个买入时间点和它后面的每个卖出时间点，卖出的话就获取当前利润然后dp卖出后的可能
    这么标准的dp为什么这么效率这么差呢。。

    然后就换用贪心。。
    72 46
    let profit = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1]
        }
    }
    return profit
    贪心思路：只要涨就买就可以了
    我是傻逼
*/