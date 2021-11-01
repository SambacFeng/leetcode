/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let res = []
    let track = []

    const isValid = sub => {
        if (Number(sub) > 255 || (sub.length !== 1 && sub[0] === '0')) return false
        return true
    }
    const bt = start => {
        if (track.length > 4) return
        if (start >= s.length && track.length === 4) {
            res.push(track.join('.'))
            return
        }
        for (let i = start + 1; i <= s.length; i++) {
            if (track.length > 4 
                || i - start > 3 
                || s.length - i >= (4 - track.length) * 3 
                || s.length - 1 - i < (4 - track.length)
                ) break // 剪枝
            let sub = s.slice(start, i)
            if (isValid(sub)) {
                track.push(sub)
                bt(i)
                track.pop()
            } else {
                break // 剪枝
            }
        }
    }

    bt(0)
    return res
}

/* 
    2021/11/1
    5 7
    回溯
    剪枝之后92 39
    剪枝发生在：
    1. 已经有四组了
    2. 一位太长(超过3)
    3. 剩余的太多
    4. 剩余的不够用
    5. 不合法(这个不合法后面的都不合法)
    论剪枝的重要性
*/

restoreIpAddresses("25525511135")