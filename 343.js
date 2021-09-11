/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    let memo = Array(n + 1).fill(-1)
    if (n < 4) return n - 1

    const dp = num => {
        if (num < 4) return num
        if (memo[num] !== -1) return memo[num]
        let res = -1
        for (let i = 1; i < num; i++) {
            let subRes = dp(i) * dp(num - i)
            res = Math.max(res, subRes)
        }
        memo[num] = res
        return res
    }

    return dp(n)
}

/* 
    2021/9/11
    85 64
    自顶向下的dp，注意处理n本身较小和dp到的n较小这两种不同情况(一种必须分成两个数，一种不用)

    换用dp数组，自下而上
    94 43
    if (n < 4) return n - 1
    let dp = Array(n + 1)
    dp[1] = 1, dp[2] = 2, dp[3] = 3
    let res = 0
    for (let i = 4; i <= n; i++) {
        let subRes = 0
        for (let j = 1; j <= i / 2; j++) {
            subRes = Math.max(subRes, dp[j] * dp[i - j])
        }
        dp[i] = subRes
    }
    return dp[n]

    换用贪心，可不使用额外空间
    85 89
    if (n < 4) return n - 1
    let remain = n % 3, times = (n - remain) / 3
    if (remain === 1) {
        return 3**(times - 1) * 4
    } else if (remain) {
        return 3**times * remain
    } else {
        return 3 **times
    }
*/

integerBreak(10)