/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let target = new Map(), curr = new Map()
    let left = right = 0
    let match = 0
    let res = []
    for (let i = 0; i < p.length; i++) {
        target.has(p[i]) ? target.set(p[i], target.get(p[i]) + 1) : target.set(p[i], 1)
    }
    while (right < s.length) {
        let ch = s[right++]
        if (target.has(ch)) {
            curr.has(ch) ? curr.set(ch, curr.get(ch) + 1) : curr.set(ch, 1)
            if (curr.get(ch) === target.get(ch)) match++
        }
        if (right - left >= p.length) {
            if (match === target.size) res.push(left)
            let rmCh = s[left++]
            if (curr.has(rmCh)) {
                if (curr.get(rmCh) === target.get(rmCh)) match--
                curr.set(rmCh, curr.get(rmCh) - 1)
            }
        }
    }

    return res
}

/* 
    2021/9/16
    78 72
    滑动窗口
    类似567，要求子串所以控制窗口长度始终等于p长度，找到时返回索引
*/