/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let nums = new Array(101).fill(0).map((x, i) => i ** 2)
    nums.shift()
    let dp = new Array(n + 1).fill(100001)
    dp[0] = 0
    for (let i = 1; i <= n; i++) {
        let res = 100001
        for (let j = 0; j < nums.length; j++) {
            if (i - nums[j] < 0) break
            res = Math.min(res, dp[i - nums[j]] + 1)
        }
        dp[i] = res
    }
    return dp[n]
}

/* 
    2021/11/17
    72 42
    dp
    换零钱plus，相当于coins固定的换零钱
*/