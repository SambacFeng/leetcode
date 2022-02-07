/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
    const abc = [['a', a], ['b', b], ['c', c]]
    let res = ''
    while (true) {
        abc.sort((a, b) => b[1] - a[1])
        const idx = res.slice(-2) === abc[0][0].repeat(2) ? 1 : 0
        if (abc[idx][1]-- === 0) return res
        res += abc[idx][0]
    }
}

/* 
    2022/02/07
    93 14
    字符串
*/