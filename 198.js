/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    let n = nums.length
    let curr = next1 = next2 = 0
    for (let i = n - 1; i >= 0; i++) {
        curr = Math.max(nums[i] + next2, next1)
        next2 = next1
        next1 = curr
    }
    return curr
};


console.log(rob([2,7,9,3,1]));

/* 
    2021/8/26
    67 51
    let memo = Array(nums.length).fill(-1)
    const dp = start => {
        if (start >= nums.length) return 0
        if (memo[start] !== -1) return memo[start]
        let res = Math.max(dp(start + 1), nums[start] + dp(start + 2))
        memo[start] = res
        return res
    }
    return dp(0)
    dp(i) = max {
                    dp(i + 1)               // 不抢这个，从下一个算起
                    nums[i] + dp(i + 2)     // 抢这个，跳过下一个
                }

    换用自底向上的dp数组解法
    81 74
    n = nums.length
    let dp = Array(n + 2).fill(0)
    for (let i = n - 1; i >= 0; i--) {
        dp[i] = Math.max(nums[i] + dp[i + 2], dp[i + 1])
    }
    return dp[0]
    dp数组每个值的状态取决于其前两个值的大小
*/