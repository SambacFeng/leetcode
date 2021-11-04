/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {
    let res = 1
    let dp = new Map()
    arr.forEach(e => {
        dp.set(e, dp.get(e - difference) + 1 || 1)
        res = Math.max(res, dp.get(e))
    })
    return res
}

/* 
    2021/11/5
    71 42
    dp 哈希表
    使用dp(i)记录到第i个元素时的最长元素
    dp(i) = dp(arr[i] - diff)
    为避免每次向前查找导致N^2，使用哈希表记录dp(i)
*/