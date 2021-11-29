/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    let res = 0
    const m = grid.length, n = grid[0].length

    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n) return 0
        if (grid[i][j] === 0) return 0
        grid[i][j] = 0
        return 1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1)
    }

    for (let i = 0; i < m; i++) {
        dfs(i, 0)
        dfs(i, n - 1)
    }
    for (let j = 0; j < n; j++) {
        dfs(0, j)
        dfs(m - 1, j)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res += dfs(i, j)
        }
    }
    return res
}

/* 
    2021/11/29
    68 73
    dfs
    相比695，先把所有靠边的岛屿淹掉，再加和而不是求最大
*/