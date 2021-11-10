/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
 var findPoisonedDuration = function (timeSeries, duration) {
    let res = 0, last = 0
    timeSeries.forEach(e => {
        e >= last ? res += duration : res += e - last + duration
        last = e + duration
    })
    return res
}

/* 
    2021/11/10
    89 41
    简单模拟，注意遍历到末尾时仍有剩余时间的情况
*/