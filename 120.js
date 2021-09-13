/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let n = triangle.length
    if (n === 1) return triangle[0][0]
    let preArr = triangle[n - 1]
    let currArr = []
    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            currArr[j] = Math.min(preArr[j], preArr[j + 1]) + triangle[i][j]
        }
        preArr = currArr
    }
    return currArr[0]
}

/* 
    2021/9/13
    方法一：dp
    89 28
    let n = triangle.length
    let memo = Array(n).fill(-1).map(_ => Array(n).fill(-1))

    const dp = (i, j) => {
        if (i < 0 || i >= n || j < 0 || j > i) return 0
        if (memo[i][j] !== -1) return memo[i][j]

        let res = Math.min(dp(i + 1, j), dp(i + 1, j + 1)) + triangle[i][j]
        memo[i][j] = res
        return res
    }

    return dp(0, 0)
    自顶向下的dp，需要N^2的额外空间

    方法二：迭代
    88 65
    自底向上的迭代，使用一维数组进行存储，参考状压dp
*/

minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])