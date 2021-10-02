/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
    let arr = Array(101).fill(0)
    let res = 0
    nums.forEach(num => {
        arr[num]++
    })
    for (let i = 1; i <= 99; i++) {
        if (i + k > 100) break
        if (arr[i] && arr[i + k]) {
            res += arr[i] * arr[i + k]
        }
    }
    return res
}

/* 
    2020/10/2
    52 17
    两次遍历，及时终止
    
    使用哈希表，优化到85 20
    let m = new Map()
    let res = 0
    nums.forEach(num => {
        m.set(num, m.get(num) + 1 || 1)
    })
    m.forEach((val, num) => {
        if (num + k > 100) return res
        if (m.has(num + k)) {
            res += val * m.get(num + k)
        }
    })
    return res
*/