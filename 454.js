/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let m = new Map()
    let res = 0
    for (let a of nums1) {
        for (let b of nums2) {
            m.has(a + b) ? m.set(a + b, m.get(a + b) + 1) : m.set(a + b, 1)
        }
    }
    for (let a of nums3) {
        for (let b of nums4) {
            if (m.has(0 - a - b)) {
                res += m.get(0 - a - b)
            }
        }
    }
    return res
}

/* 
    2021/9/18
    95 56
    课好多，水一水。。
    哈希表，将四个数组分两部分，相当于两数之和
*/