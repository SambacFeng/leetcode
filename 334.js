/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    const n = nums.length
    if (n < 3) return false
    let first = nums[0], second = Number.MAX_SAFE_INTEGER
    for (let i = 1; i < n; i++) {
        const num = nums[i]
        if (num > second) {
            return true
        } else if (num > first) {
            second = num
        } else {
            first = num
        }
    }
    return false
}

/* 
    2022/01/12
    99 81
    贪心 模拟
*/