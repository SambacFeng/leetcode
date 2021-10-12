/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let n = nums.length
    let min = max = res = nums[0]
    for (let i = 1; i < n; i++) {
        let newMin = newMax = 0
        newMin = Math.min(min * nums[i], max * nums[i], nums[i])
        newMax = Math.max(min * nums[i], max * nums[i], nums[i])
        res = Math.max(res, newMax)
        min = newMin
        max = newMax
    }
    return res
}

/*
    2021/10/12
    77 10
    dp状态机
    let n = nums.length
    let dp = Array(n + 1).fill(0).map(_ => Array(2).fill(Number.MIN_SAFE_INTEGER))
    dp[0][0] = dp[0][1] = nums[0]
    let res = nums[0]
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.min(dp[i - 1][0] * nums[i], dp[i - 1][1] * nums[i], nums[i])
        dp[i][1] = Math.max(dp[i - 1][0] * nums[i], dp[i - 1][1] * nums[i], nums[i])
        res = Math.max(res, dp[i][1])
    }
    return res
    会出现负负得正并大于正数相乘最大值的情况，故dp table每个位置都要记录当前最大和最小值
    最大值可能来源于之前的最大值*正值，之前的最小值*负值，或者直接就是当前值
    dp[i][0]记录最小值，dp[i][1]记录最大值
    dp[i][0] = Math.min(dp[i - 1][0] * nums[i], dp[i - 1][1] * nums[i], nums[i])
    dp[i][1] = Math.max(dp[i - 1][0] * nums[i], dp[i - 1][1] * nums[i], nums[i])

    状态压缩后
    90 51
*/