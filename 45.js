/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let n = nums.length
    let end = best = jumps = 0
    for (let i = 0; i < n - 1; i++) {
        best = Math.max(best, nums[i] + i)
        if (end === i) {
            jumps++
            end = best
        }
    }
    return jumps
};

/* 
    2021/8/30
    8 9
    跑的可真慢啊。。为啥啊
    let n = nums.length
    let memo = new Array(n).fill(99999)
    const dp = start => {
        if (start === n - 1) {
            return 0
        }
        if (start + nums[start] >= n - 1) {
            memo[start] = 1
            return 1
        }
        if (memo[start] !== 99999) {
            return memo[start]
        }
        let res = 88888
        for (let i = 1; i <= nums[start]; i++) {
            res = Math.min(res, dp(start + i) + 1)
        }
        memo[start] = res
        return res
    }
    return dp(0)
    原来这个算法是N^2的(次数*递归深度)

    改用贪心算法，不进行递归，改求当前位置两次跳跃后的最远值作为局部最优解
    95 33
    复杂度为N 1
*/

let arr = [2,3,1,1,4]
console.log(jump(arr));