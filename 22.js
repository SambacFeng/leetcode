/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let track = [], res = []

    const bt = (left, right, track) => {
        if (left > right || left < 0 || right < 0) return
        if (!(left || right)) {
            res.push(track.join(''))
        }

        track.push('(')
        bt(left - 1, right, track)
        track.pop()

        track.push(')')
        bt(left, right - 1, track)
        track.pop()
    }

    bt(n, n, track)

    return res
};

/* 
    2021/8/28
    55 70
    回溯
    路径：使用的左右括号数量
    选择：左括号或右括号
    结束条件：左右括号均被用完
*/