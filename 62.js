/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let memo = Array(m).fill(0).map(_ => Array(n).fill(-1))
    const dp = (m, n) => {
        if (m === 1 || n === 1) return 1
        if (memo[m - 1][n - 1] !== -1) return memo[m - 1][n - 1]
        let res = dp(m - 1, n) + dp(m, n - 1)
        memo[m - 1][n - 1] = res
        return res
    }
    return dp(m, n)
};

/* 
    2021/9/10
    简单dp
    另有数学解法，答案为C(m + n - 2, m - 1)
    let ans = 1;
    for (let x = n, y = 1; y < m; ++x, ++y) {
        ans = Math.floor(ans * x / y);
    }
    return ans;
*/

uniquePaths(100, 100)