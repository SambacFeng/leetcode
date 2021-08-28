/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let track = [], res = []

    const bt = (track, start) => {
        if (track.length === k) {
            res.push(track.slice())
            return
        }
        for (let i = start; i <= n; i++) {
            track.push(i)
            bt(track, i + 1)
            track.pop()
        }
    }

    bt(track, 1)

    return res
};

/* 
    2021/8/28
    68 40
    回溯
    路径：已在track中的num
    选择列表：不在track中且小于等于n的数字
    结束条件：track长度等于k
*/

console.log(combine(4, 2));