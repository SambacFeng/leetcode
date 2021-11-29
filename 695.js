/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let res = 0
    const m = grid.length, n = grid[0].length

    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n) return 0
        if (!grid[i][j]) return 0
        grid[i][j] = 0
        return 1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res = Math.max(res, dfs(i, j))
        }
    }
    return res
}

/* 
    2021/11/29
    27 61
    dfs
*/