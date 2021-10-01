/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    let m = new Map()
    for (let i = 0; i < paths.length; i++) {
        if (!m.has(paths[i][0])) {
            m.set(paths[i][0], 1)
        }
    }
    for (let i = 0; i < paths.length; i++) {
        if (!m.has(paths[i][1])) {
            return paths[i][1]
        }
    }
    return
}

/* 
    2021/10/1
    88 43
    由于答案唯一，故找出唯一一个只作为终点而不作为起点的站点即可
    今天的做题终点站就在这里了
*/