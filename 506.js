/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    const m = new Map()
    const res = new Array(score.length)
    score.forEach((v, i) => m.set(v, i))
    score.sort((a, b) => b - a)
    const award = ["Gold Medal", "Silver Medal", "Bronze Medal"]
    score.forEach((v, i) => i <= 2 ? res[m.get(v)] = award[i] : res[m.get(v)] = `${i + 1}`)
    return res
}

/* 
    2021/12/2
    100 37
    排序 哈希表
    使用哈希表记录索引，排序后遍历根据查哈希表的结果填入成绩
*/