/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let board = new Array(n).fill(0).map(_ => new Array(n).fill('.'))
    let res = []
    const backtrack = (board, row) => {
        if (row === n) {
            let subRes = []
            board.forEach(e => {
                subRes.push(e.join(''))
            })
            res.push(Array.from(subRes))
            return
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q'
                backtrack(board, row + 1)
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
    backtrack(board, 0)
    return res
}

/* 
    2021/11/2
    26 33
    回溯
    二维数组不能使用Array.from的方式获得浅拷贝
*/

solveNQueens(4)
// console.log(res);