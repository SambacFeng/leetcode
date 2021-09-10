/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length, n = obstacleGrid[0].length
    let memo = Array(m).fill(0).map(_ => Array(n).fill(-1))

    const dp = (a, b) => {
        if (a >= m - 1 && b >= n - 1) return 1
        if (obstacleGrid[a][b] === 1) return 0
        if (memo[a][b] !== -1) return memo[a][b]
        let res = dp(a + 1, b) + dp(a, b + 1)
        memo[a][b] = res
        return res
    }

    return dp(0, 0)
};

/* 
    2021/9/11
    97 98
    跑的比我想象中快。。
*/

uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])