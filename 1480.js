/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let n = nums.length
    for (let i = 1; i < n; i++) {
        nums[i] += nums[i - 1]
    }
    return nums
};

/* 
    2021/8/29
    85 84
    前缀和板子
*/