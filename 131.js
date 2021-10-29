/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let res = []
    let track = []
    let len = s.length

    const isHuiwen = (left, right) => {
        while (left <= right) {
            if (s[left++] !== s[right--]) return false
        }
        return true
    }

    const bt = (start) => {
        if (start >= len) {
            res.push(Array.from(track))
            return
        }
        for (let i = start; i < len; i++) {
            if (isHuiwen(start, i)) {
                track.push(s.slice(start, i + 1))
                bt(i + 1)
                track.pop()
            }
        }
    }

    bt(0)
    return res
}

/* 
    2021/10/30
    57 87
    回溯 + 回文串判断
    是回文串的话加入路径中并从下一个位置开始继续回溯
    不是的话扩大字串长度
*/