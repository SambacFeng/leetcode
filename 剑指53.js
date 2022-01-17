/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    let mid = -1

    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            break
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    let l = r = mid
    while (nums[l] === target) l--
    while (nums[r] === target) r++
    l++
    r--
    if (l > r) {
        return 0
    } else {
        return r - l + 1
    }
}

/* 
    2022/01/17
    94 61
    数组 二分查找
*/