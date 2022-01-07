/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    const arr = [...s]
    let res = 0, curr = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            res = Math.max(res, ++curr)
        } else if (arr[i] === ')') {
            --curr
        }
    }
    return res
}

/* 
    2022/01/07
    73 73
    字符串 模拟
*/