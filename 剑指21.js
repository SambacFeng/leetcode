/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    let left = 0, right = nums.length - 1
    while (left < right) {
        while (left < right && nums[left] % 2) left++
        while (left < right && !(nums[right] % 2)) right--
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++
        right--
    }
    return nums
}

/* 
    2021/12/2
    74 94
    双指针
    又错简单题了，双指针要注意处理超出数组边界的情况
*/