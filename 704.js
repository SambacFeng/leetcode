/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let low = 0, high = nums.length - 1
    while (low <= high) {
        let mid = Math.floor((high - low) / 2) + low
        if (nums[mid] === target) {
            return mid
        }
        nums[mid] < target ? low = mid + 1 : high = mid - 1
    }
    return -1
};

/* 
    2021/9/6
    32 28
    二分查找板子
*/