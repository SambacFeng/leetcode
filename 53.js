/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let n = nums.length
    let dp = new Array(n)
    let res = prev = nums[0], curr = 0
    for (let i = 1; i < n; i++) {
        curr = Math.max(nums[i], nums[i] + prev)
        res = Math.max(res, curr)
        prev = curr
    }
    return res
};

/* 
    2021/8/24
    33 12

    dp数组的含义类似LIS，为到此位置的最大子序列的值，与当前值比较取较大值保留(出现负数就取当前值，否则取和)
    类似的动态子序列的问题都可以尝试使用这一思路定义dp数组

    状态压缩(参考fib)后76 45
    dp[0] = nums[0]
    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
    }
    return Math.max(...dp)
*/