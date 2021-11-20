/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let m = new Map()
    let res = 0
    nums.forEach(e => {
        m.set(e, m.get(e) + 1 || 1)
    })
    m.forEach((v, k) => {
        if (m.has(k + 1)) {
            res = Math.max(res, v + m.get(k + 1))
        }
    })
    return res
}

/* 
    2021/11/20
    91 78
    哈希表
    想复杂了
*/

/* let m1 = new Map(), m2 = new Map()
let maxLen1 = 0, maxLen2 = 0 
let maxNum1 = nums[0], maxNum2 = [0]
nums.forEach(e => {
    m1.set(e, m1.get(e) + 1 || 1)
    if (m1.get(e) > maxLen1) {
        maxLen1 = m1.get(e)
        maxNum1 = e
    }
    m2.set(`${e - 1}, ${e}`, m2.get(`${e - 1}, ${e}`) + 1 || 1)
    if (m2.get(`${e - 1}, ${e}`) > maxLen2) {
        maxLen2 = m2.get(`${e - 1}, ${e}`)
        maxNum2 = e - 1
    }
    m2.set(`${e}, ${e + 1}`, m2.get(`${e}, ${e + 1}`) + 1 || 1)
    if (m2.get(`${e}, ${e + 1}`) > maxLen2) {
        maxLen2 = m2.get(`${e}, ${e + 1}`)
        maxNum2 = e
    }
})
return maxLen1 === maxLen2 && Math.abs(maxNum1 - maxNum2) ? 0 : maxLen2 */

findLHS([1,4,1,3,1,-14,1,-13])



/* let m = new Map()
let maxLen = 0, maxNum = null
let res = []
nums.forEach(e => {
    if (m.has(e)) {
        let len = m.get(e)
        if (++len > maxLen) {
            maxLen = len
            maxNum = e
        }
        m.set(e, len)
    } else {
        m.set(e, 1)
        if (!maxLen) {
            maxLen = 1
            maxNum = e - 1
        }
    }
    if (m.has(e - 1)) {
        let len = m.get(e - 1)
        if (++len > maxLen) {
            maxLen = len
            maxNum = e - 1
        }
        m.set(e - 1, len)
    } else {
        m.set(e - 1, 1)
    }
})
nums.forEach(e => {
    if (e === maxNum || e - 1 === maxNum) {
        res.push(e)
    }
})
return maxLen */