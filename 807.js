/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    const n = grid.length
    let res = 0
    const maxRowHeight = new Array(n).fill(0)
    const maxColHeight = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            maxRowHeight[i] = Math.max(maxRowHeight[i], grid[i][j])
            maxColHeight[j] = Math.max(maxColHeight[j], grid[i][j])
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0 ; j < n; j++) {
            res += Math.min(maxRowHeight[i], maxColHeight[j]) - grid[i][j]
        }
    }
    return res
}

/* 
    2021/12/13
    14 24
    数组 贪心
    第一次遍历，找到每行每列，最高的楼
    第二次遍历，在不影响最高楼的情况下加高，就是加到两个方向上最大值的最小值
    居然写出了和官方题解一毛一样的代码。。
*/

const arr = [[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]
maxIncreaseKeepingSkyline(arr)