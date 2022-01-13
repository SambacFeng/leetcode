/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    if (nums.length === 1) return 0
    let max = Number.MIN_SAFE_INTEGER
    let maxIndex = -1
    let second = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            second = max
            max = nums[i]
            maxIndex = i
        } else if (nums[i] > second) {
            second = nums[i]
        }
    }
    return max >= 2 * second ? maxIndex : -1
}

/* 
    2022/01/13
    68 50
    数组
*/