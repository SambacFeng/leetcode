/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    let n = prices.length
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

    return dp(0, k)
};

/* 
    2021/9/1
    5 83
    尽管跑得很慢。。但是过了，应该是有更好的解法
    与不限制次数的122题相比，将memo扩充为二维，dp增加k为参数，每次买卖后k - 1，k为0时返回0
*/