/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    if (s.length !== goal.length) return false
    let m = new Map()
    if (s === goal) {
        if (s.length > 26) return true
        for (let i = 0; i < s.length; i++) {
            if (m.get(s[i])) {
                return true
            } else {
                m.set(s[i], 1)
            }
        }
        return false
    } else {
        let diffIndex1 = -1, diffIndex2 = -1
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== goal[i]) {
                if (diffIndex1 === -1) {
                    diffIndex1 = i
                } else if (diffIndex2 === -1) {
                    diffIndex2 = i
                } else {
                    return false
                }
            }
        }
        return s[diffIndex1] === goal[diffIndex2] && s[diffIndex2] === goal[diffIndex1]
    }
}

/* 
    2021/11/23
    92 73
    字符串 模拟
    怎么会有人现在还把逻辑等写成赋值号的。。
*/