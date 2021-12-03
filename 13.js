/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const m = new Map()
    m.set('I', 1)
    m.set('V', 5)
    m.set('X', 10)
    m.set('L', 50)
    m.set('C', 100)
    m.set('D', 500)
    m.set('M', 1000)
    let ans = 0
    const n = s.length
    for (let i = 0; i < n; ++i) {
        const value = m.get(s[i])
        i < n - 1 && value < m.get(s[i + 1]) ? ans -= value : ans += value
    }
    return ans
}

/* 
    2021/12/3
    30 49
    字符串 哈希表
    遍历查表，如果第i位比它右边大就加，小就减
*/