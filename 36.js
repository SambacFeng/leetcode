/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function (board) {
    const judgeRow = (m, n) => {
        for (let j = 0; j < 9; j++) {
            if (j === n) continue
            if (board[m][j] === board[m][n]) return false
        }
        return true
    }

    const judgeCol = (m, n) => {
        for (let i = 0; i < 9; i++) {
            if (i === m) continue
            if (board[i][n] === board[m][n] && i !== m) return false
        }
        return true
    }

    const judgeBlock = (m, n) => {
        for (let i = m - m % 3; i < m - m % 3 + 3; i++) {
            for (let j = n - n % 3; j < n - n % 3 + 3; j++) {
                if (i === m && j === n) continue
                if (board[i][j] === board[m][n]) return false
            }
        }
        return true
    }

    const judge = (m, n) => {
        return judgeRow(m, n) && judgeCol(m, n) && judgeBlock(m, n)
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                if(!judge(i, j)) return false
            }
        }
    }
    return true
}

/* 
    2021/9/17
    64 76
    模拟，由于全过程步数可控，O(N)
*/