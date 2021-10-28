/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return []
    let c = [["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"],
        ["j", "k", "l"],
        ["m", "n", "o"],
        ["p", "q", "r", "s"],
        ["t", "u", "v"],
        ["w", "x", "y", "z"]]
    let res = []
    let track = []

    const bt = start => {
        if (start === digits.length) {
            res.push(track.join(''))
            return
        }
        c[digits[start] - 2].forEach(e => {
            track.push(e)
            bt(start + 1)
            track.pop()
        })
    }

    bt(0)
    return res
}

/* 
    2021/10/28
    67 50
    回溯
*/