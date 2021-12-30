/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    const m = new Map()
    for (c of s) {
        m.set(c, m.get(c) + 1 || 1)
    }
    for ([k ,v] of m) {
        if (v === 1) return k
    }
    return " "
}

/* 
    2021/12/30
    72 38
    哈希表
    两次遍历，利用js中Map有序的特性
*/