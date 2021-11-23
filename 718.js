/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
    let m = nums1.length, n = nums2.length
    let dp = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0))
    let res = 0
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= m; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
                res = Math.max(res, dp[i][j])
            }
        }
    }
    return res
}

/* 
    2021/11/23
    62 37
    dp
    简化版LCS问题，如果是像本题一样求连续的子串/子数组则要注意在有最大值时及时更新最大值，而求无须连续的子序列问题则直接返回结束位置的dp table值即可
*/