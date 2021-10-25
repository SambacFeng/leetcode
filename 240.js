/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let row = 0, col = matrix[0].length - 1
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) return true
        matrix[row][col] > target ? col-- : row++
    }
    return false
}

/* 
    2021/10/25
    70 100
    斜向查找，迭代
*/