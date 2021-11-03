/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    const judgeRow = (m, n, ch) => {
        for (let j = 0; j < 9; j++) {
            if (j === n) continue
            if (board[m][j] === ch) return false
        }
        return true
    }

    const judgeCol = (m, n, ch) => {
        for (let i = 0; i < 9; i++) {
            if (i === m) continue
            if (board[i][n] === ch) return false
        }
        return true
    }

    const judgeBlock = (m, n, ch) => {
        for (let i = m - m % 3; i < m - m % 3 + 3; i++) {
            for (let j = n - n % 3; j < n - n % 3 + 3; j++) {
                if (i === m && j === n) continue
                if (board[i][j] === ch) return false
            }
        }
        return true
    }

    const isValid = (m, n, ch) => {
        return judgeRow(m, n, ch) && judgeCol(m, n, ch) && judgeBlock(m, n, ch)
    }

    const bt = (m, n) => {
        if (n === 9) return bt(m + 1, 0)
        if (m === 9) return true
        if (board[m][n] !== '.') return bt(m, n + 1)
        for (let i = m; i < 9; i++) {
            for (let j = n; j < 9; j++) {
                for (let ch = 1; ch <= 9; ch++) {
                    if (isValid(i, j, ch.toString())) {
                        board[i][j] = ch.toString()
                        if (bt(i, j + 1)) return true
                        board[i][j] = '.'
                    }
                }
                return false
            }
        }
        return false
    }
    bt(0, 0)
    return board
}

/* 
    2021/11/3
    32 47
    回溯
    为了给回溯创造base condition，给回溯函数设置一个bool返回值，当能完全填满board时返回true否则返回false
    从行开始，每次回溯同行的下一个，回溯至行末时从下一行开始回溯
    剪枝：在获得true的返回值时立即返回true，因为题目中限制了仅有一解
*/

const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
board = [
    [".", "2", ".", ".", "3", ".", ".", ".", "4"],
    [".", "7", ".", ".", "9", "5", "1", ".", "."],
    [".", "6", "8", ".", "4", ".", ".", "2", "9"],
    [".", "8", ".", ".", ".", "9", "7", ".", "."],
    ["2", "3", ".", ".", "6", ".", ".", "9", "5"],
    [".", ".", "4", "7", "5", ".", ".", "1", "."],
    ["3", "1", ".", ".", "7", ".", "6", "5", "."],
    [".", ".", "9", "3", "1", ".", ".", "4", "."],
    ["7", ".", ".", ".", "8", ".", ".", "3", "."]]
solveSudoku(board)