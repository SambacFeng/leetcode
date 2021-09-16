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
            window.delete(left++)
        }
        window.set(ch, 1)
        if (window.size > res) res = window.size
    }

    return res === Number.MIN_SAFE_INTEGER ? 0 : res
}

/* 
    2021/9/16
    79 45
    滑动窗口，在遇到重复字符时收缩窗口
*/