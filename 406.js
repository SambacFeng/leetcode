/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    let res = []
    people.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1]
        else return b[0] - a[0]
    })
    people.forEach(e => {
        res.splice(e[1], 0, e)
    })
    return res
}

/* 
    2021/11/11
    91 90
    贪心
    先按身高排序，高身高先插入，这样在插入低身高的过程中不会影响到高身高的结果，符合贪心由局部最优解构造全局最优解的思路
*/