/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let low = 0, high = nums.length - 1, mid = 0

    while (low <= high) {
        mid = low + Math.floor((high - low) / 2)
        if (nums[mid] === target) break
        if (nums[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    let left = right = mid
    while (nums[left] === target) {
        left--
    }
    while (nums[right] === target) {
        right++
    }
    left++
    right--
    if (left > right) {
        return [-1, -1]
    } else {
        return [left, right]
    }
};

/* 
    2021/9/9
    73 73
    写的好像有点臃肿。。但是跑的不慢
    二分查找找到target后定义left和right向两侧扩散找到范围
    如果left和right的值不合法则证明没找到
*/