/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let left = 1, right = num, mid = left + Math.floor(right - left) / 2
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2)
        if (mid * mid === num) return true
        else if (mid * mid > num) right = mid - 1
        else left = mid + 1
    }
    return false
}

/* 
    2021/11/4
    88 47
    二分查找变形
*/