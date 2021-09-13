/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    let n = points.length
    // let m = Array(n).fill(0).map(_ => new Map())
    let res = 0

    const dist = (a, b) => {
        return (points[a][0] - points[b][0]) ** 2 + (points[a][1] - points[b][1]) ** 2
    }

    for (let i = 0; i < n; i++) {
        let m = new Map()
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                let d = dist(i, j)
                m.has(d) ? m.set(d, m.get(d) + 1) : m.set(d, 1)

            }
        }
        m.forEach((v, k) => {
            if (v > 1) {
                res += v * (v - 1)
            }
        })
    }

    return res
}

/*
    2021/9/13
    94 72
    数组 + 哈希表
    外层遍历所有点，内层遍历所有其他点
    计算每个两点间距离，使用Map保存两点具有同样距离的次数
    如果次数大于2则res += 上所有可能的组合数
    一开始开了二维的数组套Map，空间很差，优化到循环过程中就没事了
*/