/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
    let res = 0
    const m = grid.length, n = grid[0].length

    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n) return -10001
        if (grid[i][j] === 1) return 0
        grid[i][j] = 1
        return 1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j) > 0) res++
        }
    }
    return res
}

/* 
    2021/11/29
    32 92
    dfs
    计算岛屿面积，出界返回一个大负值，这样靠边的岛屿的面积就会小于0，就不会被统计到岛屿数量中去
*/