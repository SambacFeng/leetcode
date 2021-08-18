/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let board = new Array(n).fill(new Array(n).fill('.'))
    let res = []
    const backtrack = (board, row) => {
        if (row === n) {
            res.push(board)
            return
        }
        for (let col = 0; col < n; col++) {
            if (!isValid(board, row, col))
                continue
            board[row][col] = 'Q'
            backtrack(board, row + 1)
            board[row][col] = '.'
        }
    }
    const isValid = (board, row, col) => {
        for (let i = 0; i < n; i++) {
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
    console.log(res);
    return res
};

solveNQueens(4)
// console.log(res);