/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    let arr = s.split(' ')
    let res = 0
    arr.forEach(e => {
        if (!(e === "")) res++
    })
    return res
}

/* 
    2021/10/7
    98 17
    又双叒叕是每日一水

    最后给优化到剩一行了
    return s.split(' ').filter(e => e).length
    61 18
*/