/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    if (!grid.length || !grid[0].length) return 0
    const memo = new Array(grid.length).fill(0).map(_ => new Array(grid[0].length).fill(0))

    const dp = (m, n) => {
        if (m >= grid.length || n >= grid[0].length) return 0
        if (memo[m][n]) return memo[m][n]
        let value = grid[m][n]
        value += Math.max(dp(m + 1, n), dp(m, n + 1))
        memo[m][n] = value
        return value
    }

    return dp(0, 0)
}

/* 
    2022/01/10
    67 62
    dp
*/