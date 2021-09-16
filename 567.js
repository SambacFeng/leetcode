/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let target = new Map(), curr = new Map()
    let left = right = 0
    let match = 0
    for (let i = 0; i < s1.length; i++) {
        target.has(s1[i]) ? target.set(s1[i], target.get(s1[i]) + 1) : target.set(s1[i], 1)
    }
    while (right < s2.length) {
        let ch = s2[right++]
        if (target.has(ch)) {
            curr.has(ch) ? curr.set(ch, curr.get(ch) + 1) : curr.set(ch, 1)
            if (curr.get(ch) === target.get(ch)) match++
        }
        if (right - left >= s1.length) {
            if (match === target.size) return true
            let rmCh = s2[left++]
            if (curr.has(rmCh)) {
                if (curr.get(rmCh) === target.get(rmCh)) match--
                curr.set(rmCh, curr.get(rmCh) - 1)
            }
        }
    }
    return false
}

/* 
    2021/9/16
    92 94
    滑动窗口
    由于题目要求是子串而非子序列，故窗口大小在增大至等于s1.length后不再变化，只会向右移动
    即每次扩展后立即收缩
*/