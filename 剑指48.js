/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let window = new Map()
    let res = Number.MIN_SAFE_INTEGER
    let left = right = 0
    while (right < s.length) {
        let ch = s[right++]
        while (window.has(ch)) {
            let rmCh = s[left++]
            window.delete(rmCh)
        }
        window.set(ch, 1)
        if (window.size > res) {
            res = window.size
        }
    }

    return res === Number.MIN_SAFE_INTEGER ? 0 : res
}

/* 
    2022/01/14
    83 41
    滑动窗口
*/