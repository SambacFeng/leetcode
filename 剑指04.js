/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false
    }
    let i = 0, j = matrix[0].length - 1
    while (i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length) {
        if (matrix[i][j] > target && j > 0 || matrix[i][j] < target && i === matrix.length - 1) {
            j--
        } else if (matrix[i][j] < target && i < matrix.length - 1 || matrix[i][j] > target && j === 0) {
            i++
        }
        if (i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length && matrix[i][j] === target) {
            return true
        }
    }
    return false
}

let testArr = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]
testArr = [[]]
console.log(findNumberIn2DArray(testArr, 25))

/* 
    2021/7/20
    寻找合适的方向，从右上或左下开始
    注意边界条件以及数组非空！！
    看了个比我写的简单得多的题解，省掉了很多不必要的边界条件判断，我是傻逼
    if (!matrix.length) return false
    let x = matrix.length - 1, y = 0
    while (x >= 0 && y < matrix[0].length) {
        if (matrix[x][y] === target) {
            return true
        } else if (matrix[x][y] > target) {
            x--
        } else {
            y++
        }
    }
    return false
    也可以将数组降维后排序，但时空复杂度都不佳
    matrix.flat(Infinity).includes(target)
*/