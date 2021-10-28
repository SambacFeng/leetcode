/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let res = []
    let track = []

    const bt = (k, n, start) => {
        if (k === 0) {
            if (n === 0) {
                res.push(track.slice())
            }
            return
        }
        for (let i = start; i <= n; i++) {
            if (i > 9) break
            track.push(i)
            bt(k - 1, n - i, i + 1)
            track.pop()
        }
        return
    }

    bt(k, n, 1)

    return res
}

/* 
    2021/10/28
    18 86
    回溯 + 剪枝
*/

combinationSum3(3, 7)