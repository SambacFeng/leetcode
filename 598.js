/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    let width = n, height = m
    ops.forEach(e => {
        if (e[0] < height) height = e[0]
        if (e[1] < width) width = e[1]
    })
    return width * height
}

/* 
    2021/11/7
    74 41
    每次都被加的位置即为最大值，记录每次被加的最小范围
*/