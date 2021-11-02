/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    let res = 0
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let i = s.length - 1
    for (let j = g.length - 1; j >= 0; j--) {
        if (i >= 0) {
            if (s[i] >= g[j]) {
                res++
                i--
            }
        } else {
            break
        }
    }
    return res
}

/* 
    2021/11/2
    91 14
    贪心
    将孩子和饼干排序，大饼干优先满足胃口大的孩子
*/