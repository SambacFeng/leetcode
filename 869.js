/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
    let s = new Set()
    for (let i = 1; i <= 1E9; i *= 2) {
        s.add(i.toString().split('').sort().join(''))
    }
    return s.has(n.toString().split('').sort().join(''))
}

/* 
    2021/10/28
    90 43
    调方法就完事了，不让掉就手动实现
*/