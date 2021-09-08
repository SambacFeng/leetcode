/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function (board, word) {
    let len = word.length
    let rowN = board.length, colN = board[0].length
    let res = false
    const dfs = (k, m, n) => {
        if (k === len) return true
        if (m < 0 || m >= rowN || 
            n < 0 || n >= colN || 
            word[k] !== board[m][n]
            ) return false
        let copy = board[m][n]
        board[m][n] = false
        if (dfs(k + 1, m, n + 1) || 
            dfs(k + 1, m, n - 1) || 
            dfs(k + 1, m + 1, n) || 
            dfs(k + 1, m - 1, n)) {
            return true
        } else {
            board[m][n] = copy
        }
        return false
    }

    for (let i = 0; i < rowN; i++) {
        for (let j = 0; j < colN; j++) {
            if (board[i][j] === word[0]) {
                if(dfs(0, i, j)) {
                    return true
                }
            }
        }
    }

    return false
}

/* 
    2021/9/8
    71 71
    dfs
    先遍历整个board找到起点，再从起点开始向四周dfs
    将已在队列中的值设置为false以避免路径重叠
*/