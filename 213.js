/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length
    if (n === 1) return nums[0]
    const calc = (start, end) => {
        let dp = Array(n + 2).fill(0)
        for (let i = end - 1; i >= start; i--) {
            dp[i] = Math.max(nums[i] + dp[i + 2], dp[i + 1])
        }
        return dp[start]
    }
    return Math.max(calc(0, n - 1), calc(1, n))
};

/* 
    2021/8/26
    81 79
    相对于第一题，因为出现了环，所以第一间房和最后一间房不能同时抢，所以在计算时分别计算不抢第一间房和不抢最后一间房的情况，取二者的较大值即为结果


    状态压缩的写法
    40 70
    let curr = next1 = next2 = 0
    for (let i = end - 1; i >= start; i--) {
        curr = Math.max(nums[i] + next2, next1)
        next2 = next1
        next1 = curr
    }
    return curr
    不是很明白为什么状态压缩后时空复杂度反倒变差了
*/