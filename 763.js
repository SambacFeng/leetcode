/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let m = new Map()
    let n = s.length
    for (let i = 0; i < n; i++) {
        m.set(s[i], i)
    }
    let left = 0, right = 0
    let res = []
    for (let i = 0; i < n; i++) {
        right = Math.max(right, m.get(s[i]))
        if (right === i) {
            res.push(right - left + 1)
            left = i + 1
        }
    }
    return res
}

/* 
    2021/11/30
    70 56
    哈希表 字符串
    遍历字符串记录每个字符最后出现的位置
    二次遍历，维护当前子串区间内最右侧位置，当遍历到的位置与最右侧位置相等时记录结果
*/