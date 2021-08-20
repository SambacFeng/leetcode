/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = (new Array(amount + 1)).fill(amount + 1)
    dp[0] = 0
    for (let i = 0; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin < 0) continue
            dp[i] = Math.min(dp[i], dp[i-coin] + 1)
        }
    }
    return (dp[amount] === amount + 1) ? -1 : dp[amount]
}

/* 
    2021/8/20
    33 14  
    let memo = []
    const dp = (coins, amount) => {
        if (amount < 0) return -1
        if (amount === 0) return 0
        if (memo[amount]) return memo[amount] 
        let res = Number.MAX_VALUE
        for (let coin of coins) {
            let subRes = dp(coins, amount - coin)
            if (subRes === -1) continue
            res = Math.min(res, subRes + 1)
        }
        memo[amount] = (res === Number.MAX_VALUE) ? -1 : res
        return memo[amount]
    }
    return dp(coins, amount)
    换用dp数组迭代
    61 69
 */