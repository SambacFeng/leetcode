/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0, right = n, res = -1
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (mid * mid <= x) {
            res = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return res
}

/* 
    2021/9/24
    86 94
    二分查找求平方根 logN
*/