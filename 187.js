/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    if (s.length < 10) return []
    let m = new Map()
    let res = new Map()
    for (let i = 0; i < s.length - 9; i++) {
        m.has(s.slice(i, i + 10)) ? res.set(s.slice(i, i + 10)) : m.set(s.slice(i, i + 10))
    }
    return [...res.keys()]
}

/* 
    2021/10/8
    30 34
    哈希表，一次遍历
*/