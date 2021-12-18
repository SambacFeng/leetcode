/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
    let res = 0
    const dfs = (i, j) => {
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] === '.') return 0
        board[i][j] = '.'
        return dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1) + 1
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(i, j)) res++
        }
    }
    return res
}

/* 
    2021/12/18
    82 97
    DFS
*/