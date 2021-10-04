/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    let arr = s.toUpperCase().split('-').join('').split('')
    let res = []
    let i = 0
    while(arr.length) {
        res.unshift(arr.pop())
        if (++i === k && arr.length) {
            res.unshift('-')
            i = 0
        }
    }
    return res.join('')
}

/* 
    2021/10/4
    7 24
    跑得很慢。。但是能跑
*/