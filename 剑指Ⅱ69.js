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
            if (arr[i] > arr[i - 1]) {
                left = i
            } else {
                right = i
            }
            i = Math.floor((left + right) / 2)
        }
    }
}

/* 
    2021/10/14
    88 5
    二分查找变形
*/

let arr = [40,48,61,75,100,99,98,39,30,10]

console.log(peakIndexInMountainArray(arr));