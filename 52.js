/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    arr = [1, 0, 0, 2, 10, 4, 40, 92, 352]
    let board = new Array(n).fill(0).map(_ => new Array(n).fill('.'))
    let res = 0
    const backtrack = row => {
        if (row === n) {
            res++
            return
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q'
                backtrack(row + 1)
                board[row][col] = '.'
            }
        }
    }
    const isValid = (row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false
            }
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') {
                return false
            }
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false
            }
        }
        return true
    }
    backtrack(0)
    return res
}

/* 
    2021/12/12
    66 52
    回溯
    比51简单，只需要维护结果数量即可
    打表81 88
*/