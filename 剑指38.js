/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    const arr = s.split("").sort()
    const track = []
    const res = []

    const bt = (track, used) => {
        if (track.length === arr.length) {
            res.push(track.join(''))
            return
        }
        for (let i = 0; i < arr.length; i++) {
            if (i > 0 && arr[i] === arr[i - 1] && !used[i - 1]) {
                continue
            }
            if (!used[i]) {
                used[i] = true
                track.push(arr[i])
                bt(track, used)
                track.pop()
                used[i] = false
            }
        }
    }

    bt(track, [])
    return res
}

/* 
    2021/12/24
    74 80
    回溯 字符串
*/