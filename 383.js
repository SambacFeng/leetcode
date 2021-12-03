/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const m = new Map()
    for (let i = 0; i < magazine.length; i++) {
        m.set(magazine[i], m.get(magazine[i]) + 1 || 1)
    }
    for (let i = 0; i < ransomNote.length; i++) {
        const val = m.get(ransomNote[i])
        if (val) {
            m.set(ransomNote[i], val - 1)
        } else {
            return false
        }
    }
    return true
}

/* 
    2021/12/4
    38 77
    哈希表 字符串
*/