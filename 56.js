/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let left = intervals[0][0], right = intervals[0][1]
    let res = []
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] > right) {
            res.push([left, right])
            left = intervals[i][0]
            right = intervals[i][1]
        } else {
            right = Math.max(right, intervals[i][1])
        }
    }
    res.push([left, right])
    return res
}

/* 
    2021/11/30
    29 55
    数组
    区间问题
*/