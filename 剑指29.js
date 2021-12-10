/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix.length || ! matrix[0].length) return []
    const num = matrix.length * matrix[0].length
    let res = []
    while (res.length !== num) {
        matrix[0].forEach(e => res.push(e))
        if (res.length === num) break
        matrix.shift()
        matrix.forEach(e => res.push(e.pop()))
        if (res.length === num) break
        matrix[matrix.length - 1].reverse().forEach(e => res.push(e))
        matrix.pop()
        if (res.length === num) break
        for (let i = matrix.length - 1; i >= 0; i--) {
            res.push(matrix[i].shift())
        }
    }
    return res
}

/* 
    2021/12/10
    75 39
    数组 模拟
    相比54，修改数组长度为0的判断
*/