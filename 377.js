/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    let dp = new Array(target + 1).fill(0)
    dp[0] = 1

    for (let i = 1; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i - nums[j] < 0) continue
            dp[i] += dp[i - nums[j]]
        }
    }

    return dp[target]
}

/* 
    2021/11/16
    58 82
    dp
    完全背包，排列数
*/