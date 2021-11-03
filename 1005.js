/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    nums.sort((a, b) => Math.abs(a) - Math.abs(b))
    for (let i = nums.length - 1; i >= 0; i--) {
        if (!k) break
        if (nums[i] < 0) {
            nums[i] = -nums[i]
            k--
        }
    }
    nums[0] = k % 2 ? -nums[0] : nums[0]
    let res = 0
    nums.forEach(e => res += e)
    return res
}

/* 
    2021/11/3
    52 82
    贪心
    先按绝对值对数组进行排序
    按绝对值从大到小的顺序将负数变正
    如果还有剩余次数，根据其奇偶判断是否将绝对值最小元素变负
*/