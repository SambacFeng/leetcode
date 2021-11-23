/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let res = 1, subRes = 1
    for (let i = 1; i < nums.length; i++) {
        nums[i] > nums[i - 1] ? res = Math.max(res, ++subRes) : subRes = 1
    }
    return res
}

/* 
    2021/11/23
    81 88
    模拟
*/