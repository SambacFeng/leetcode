/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let left = 0, right = arr.length, i = Math.floor(left + right)
    while (left <= right && i >= 0 && i <= arr.length) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            return i
        } else {
            arr[i] > arr[i - 1] ? left = i : right = i
            i = Math.floor((left + right) / 2)
        }
    }
}

/* 
    2021/10/14
    99 19
    二分查找变形
*/