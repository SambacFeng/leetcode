/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
    let sum = stones.reduce((a, b) => a + b)
    let n = Math.floor(sum / 2)
    let dp = new Array(n + 1).fill(0)
    for (let i = 0; i < stones.length; i++) {
        for (let j = n; j >= stones[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
        }
    }
    return sum - dp[n] * 2
}

/* 
    2021/11/14
    19 95
    DP
    转化为01背包问题，求一半石头的最大重量，此时两半石头重量最接近，再用两半相减得结果
*/