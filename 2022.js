/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    if (m * n !== original.length) return []
    const res = new Array(m).fill(0).map(_ => new Array(n).fill(0))
    let col = 0, row = 0
    original.forEach(e => {
        res[row][col] = e
        col++
        if (col >= n) {
            col = 0
            row++
        }
        if (row >= m)
        break
    })
}

/* 
    2022/01/01
    53 35
    数组 模拟
    2022，希望能顺利找个大厂实习，多看几本想看的书，刷到500题，秋招找个好工作
*/