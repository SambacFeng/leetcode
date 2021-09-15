/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res = []
    let left = 0, right = nums.length - 1
    while (left <= right) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            res.unshift(nums[right] ** 2)
            right--
        } else {
            res.unshift(nums[left] ** 2)
            left++
        }
    }
    return res
};

/* 
    2021/9/15
    16 35
    暴力解法为排序后输出，nlogn
    使用双指针解法从两端逼近，优化到n
*/