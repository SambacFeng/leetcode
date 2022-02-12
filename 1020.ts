function numEnclaves(grid: number[][]): number {
    let res: number = 0
    const m: number = grid.length, n: number = grid[0].length

    const dfs = (i: number, j: number) => {
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
    2022/02/12
    50 25
    dfs
*/