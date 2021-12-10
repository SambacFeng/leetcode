/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const num = matrix.length * matrix[0].length
    if (!num) return []
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
    67 50
    模拟，每次存入结果后删去原数组中已存入的部分
*/