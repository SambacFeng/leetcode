/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    let dp = new Array(amount + 1).fill(0)
    dp[0] = 1

    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j - coins[i]]
        }
    }

    return dp[amount]
}

/* 
    2021/11/16
    100 77
    dp
    完全背包
    必须外层遍历钱数，内层遍历背包容量，只有这样才是组合数，才能不重复
*/