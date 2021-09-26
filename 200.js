/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let res = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                let q = []
                q.push([i, j])
                grid[i][j] = "0"
                while (q.length) {
                    let loc = q.shift()
                    if (loc[0] > 0 && grid[loc[0] - 1][loc[1]] === "1") {
                        q.push([loc[0] - 1, loc[1]])
                        grid[loc[0] - 1][loc[1]] = "0"
                    }
                    if (loc[0] < grid.length - 1 && grid[loc[0] + 1][loc[1]] === "1") {
                        q.push([loc[0] + 1, loc[1]])
                        grid[loc[0] + 1][loc[1]] = "0"
                    }
                    if (loc[1] > 0 && grid[loc[0]][loc[1] - 1] === "1") {
                        q.push([loc[0], loc[1] - 1])
                        grid[loc[0]][loc[1] - 1] = "0"
                    }
                    if (loc[1] < grid[0].length - 1 && grid[loc[0]][loc[1] + 1] === "1") {
                        q.push([loc[0], loc[1] + 1])
                        grid[loc[0]][loc[1] + 1] = "0"
                    }
                }
                res++
            }
        }
    }
    return res
}

/* 
    2021/9/12
    35 27
    dfs遍历，遍历到的置为0
    遍历每一个位置，是岛屿的话(面积不为0)res+1
    数组元素类型是字符串。。

    let res = 0

    const dfs = (m, n) => {

        if (m < 0 || m >= grid.length || n < 0 || n >= grid[0].length) return 0
        if (grid[m][n] === '0') return 0
        let area = 0
        grid[m][n] = '0'
        area = 1 + dfs(m - 1, n)
            + dfs(m + 1, n)
            + dfs(m, n - 1)
            + dfs(m, n + 1)
        return area
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (dfs(i, j)) {
                res++
            }
        }
    }

    return res

    2021/9/26
    更新bfs解法
    18 10
*/

let grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]
numIslands(grid)