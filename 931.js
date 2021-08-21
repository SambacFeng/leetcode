/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let res = 99999
    let n = matrix.length

    /* 
        JS初始化二维数组标准方法，不能使用Array(n).fill(Array(n).fill(0))，会导致所有行的数组指向同一个对象，改一个等于改所有
    */
    let memo = Array(n).fill(99999).map(x => Array(n).fill(99999))

    const dp = (i, j) => {
        if (i < 0 || j < 0 || i >= n || j >= n) {
            return 88888
        }
        if (i === 0) {
            return matrix[i][j]
        }
        if (memo[i][j] !== 99999) {
            return memo[i][j]
        }
        memo[i][j] = Math.min(dp(i - 1, j - 1), dp(i - 1, j), dp(i - 1, j + 1)) + matrix[i][j]
        return memo[i][j]
    }

    for (let i = 0; i < n; i++) {
        res = Math.min(res, dp(n - 1, i))
    }
    return res
};

/* 
    2021/8/22
    57 77
    自底向上的dp，底部结果等于上一行三个位置的最小值+自身路径值
    边界外使用离谱值避免越界
    dp(i, j) = matrix[i][j] + min{dp(i - 1, j - 1), dp(i - 1, j), dp(i - 1, j + 1)}
*/

let matrix = [[2,1,3],[6,5,4],[7,8,9]]
console.log(minFallingPathSum(matrix))