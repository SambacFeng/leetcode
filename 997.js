/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    if (n === 1) return 1
    const input = Array(n + 1).fill(0)
    const output = Array(n + 1).fill(0)
    trust.forEach(e => {
        output[e[0]]++
        input[e[1]]++
    })
    const res = []
    output.forEach((v, i) => {
        if (!v && input[i] === n - 1) res.push(i)
    })
    return res.length === 1 ? res[0] : -1
}

/* 
    2021/12/19
    89 97
    图 模拟
    遍历trust，维护两个数组，一个记录入度，一个记录出度
    找到入度为n-1且出度为0的点，若有且仅有一个则输出，否则输出-1
*/