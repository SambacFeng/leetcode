/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let matrix = Array(n).fill(0).map(_ => Array(n).fill(0))
    let num = 1
    let right = bottom = n - 1, left = top = 0
    while (num <= n * n) {
        // 顶端从左到右
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++
        }
        top++
        // 右侧从上到下
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++
        }
        right--
        // 底端从右到左
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = num++
        }
        bottom--
        // 左侧从下到上
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = num++
        }
        left++
    }
    return matrix
}

/* 
    2021/9/17
    62 87
    一开始一直想找到更优雅的while解法，可以让四个方向的填充中心对称
    但是无论如何都会有相互覆盖的问题，作罢
    使用for循环的方法在一个while周期内填充一圈
    → → → → →
    ↑ → → → ↓
    ↑ ↑ → ↓ ↓
    ↑ ← ← ↓ ↓
    ← ← ← ← ↓
    填充顺序如图，每次循环填充的量会减少
*/

console.log(generateMatrix(3))
