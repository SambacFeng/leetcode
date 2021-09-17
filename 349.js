/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let m = new Map()
    let res = []
    for (let i = 0; i < nums1.length; i++) {
        if (!m.has(nums1[i])) {
            m.set(nums1[i], 1)
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (m.get(nums2[i]) === 1) {
            res.push(nums2[i])
            m.set(nums2[i], 0)
        }
    }
    return res
}

/* 
    2021/9/17
    89 9
    时间O(num1.length + num2.length)，常数级
    遍历num1并加入哈希表，遍历nums2查询哈希表
*/