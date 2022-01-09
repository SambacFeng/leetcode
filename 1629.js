/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
    const n = releaseTimes.length
    let arr = []
    let maxTime = 0
    for (let i = 0; i < n; i++) {
        const time = releaseTimes[i] - (releaseTimes[i - 1] || 0)
        if (time > maxTime) {
            maxTime = time
            arr = [keysPressed[i]]
        } else if (time === maxTime) {
            arr.push(keysPressed[i])
        }
    }
    return arr.sort().pop()
}

/* 
    2022/01/09
    60 33
    数组 字符串
    也可以不用数组存，每次直接比较，空间和时间都省
*/