/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    const n = s.length
    let res = 0
    
    const count = (left, right) => {
        let amount = 0
        while (left >= 0 && right < n && s[left] === s[right]) {
            left--
            right++
            amount++
        }
        return amount
    }

    for (let i = 0; i < n; i++) {
        res += count(i, i)
        res += count(i, i + 1)
    }

    return res
}

/* 
    2021/11/28
    43 19
    DP
    注意遍历顺序，要确保区间越来越大，且每次遍历都由之前遍历过的区间向外扩充,N^2
    const n = s.length
    const dp = new Array(n).fill(0).map(_ => new Array(n).fill(false))
    let res = 0

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            if (s[i] === s[j]) {
                if (i === j || i + 1 === j || dp[i + 1][j - 1]) {
                    dp[i][j] = true
                    res++
                }
            }
        }
    }

    return res

    76 94
    双指针
    减少了dp数组的开销和循环次数,N^2
*/