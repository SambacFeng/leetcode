/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let n = nums.length
    let dp = Array(n)
    dp[0] = nums[0]
    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(nums[i], nums[i]+ dp[i - 1])
    }
    return Math.max(...dp)
};

/* 
    2021/8/25
    dp，可用类似fib的状态压缩优化
*/