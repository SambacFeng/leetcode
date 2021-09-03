/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function(arr, k) {
    arr = arr.sort((a, b) => a - b).slice(0, k)
    return arr
}

/* 
    2021/9/3
    快排，简单思路
*/