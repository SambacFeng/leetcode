/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length
    let memo = Array(m + 1).fill(0).map(_ => Array(n + 1).fill(999999))

    const dp = (a, b) => {
        if (a >= m || b >= n) return 999999
        if (a === m - 1 && b === n - 1) return grid[a][b]
        if (memo[a][b] !== 999999) return memo[a][b]
        let res = Math.min(dp(a + 1, b), dp(a, b + 1)) + grid[a][b]
        memo[a][b] = res
        return res
    }

    return dp(0, 0)
};

/* 
    2021/9/11
    29 88
    dp，注意在超出边界时要返回一个大值
*/

minPathSum([[1,3,1],[1,5,1],[4,2,1]])