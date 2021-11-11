/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    points.sort((a, b) => a[0] - b[0])
    let res = 1
    for (let i = 1; i < points.length; i++) {
        points[i][0] > points[i - 1][1] ? res++ : points[i][1] = Math.min(points[i][1], points[i - 1][1])
    }
    return res
}

/* 
    2021/11/11
    29 43
    贪心
    先排序，遍历判断每个气球是否跟前一个区间有重叠部分，如果没有则需要多一支箭，如果有则维护一个最左边的重叠位置存放于points[i][1]中以判断什么时候需要新的箭
*/