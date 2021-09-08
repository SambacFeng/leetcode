/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let arr = Array(m).fill(0).map(_ => Array(n).fill(false))

    const dp = (i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n || calc(i) + calc(j) > k || arr[i][j]) return 0
        arr[i][j] = true
        let res = 0
        res = dp(i + 1, j) + dp(i - 1, j) + dp(i, j + 1) + dp(i, j - 1) + 1
        return res
    }

    const calc = num => {
        return num % 10 + Math.floor(num / 10)
    }

    return dp(0, 0)
};

/* 
    2021/9/8
    100 92
    第一个100，激动
    就。。正常dp
*/