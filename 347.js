/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let m = new Map()
    let res = []
    nums.forEach(e => {
        m.set(e, m.get(e) + 1 || 1)
    })
    let arr = [...m].sort((a, b) => b[1] - a[1])
    while (k--) {
        res.push(arr.shift()[0])
    }
    return res
}

/* 
    2021/10/3
    96 96
    两次遍历，利用哈希表进行统计，对统计结果排序后输出
*/