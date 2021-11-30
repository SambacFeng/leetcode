/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    if (s.length === 1) return 1
    let ch = s[0]
    let len = 1, res = 1
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ch) {
            len++
            res = Math.max(res, len)
        } else {
            ch = s[i]
            len = 1
        }
    }
    return res
}

/* 
    2021/12/1
    50 63
    字符串 模拟
*/