/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1, p2 = n - 1
    let tail = m + n - 1
    while (p1 >= 0 || p2 >= 0) {
        let val = 0
        if (p1 === -1) {
            val = nums2[p2--]
        } else if (p2 === -1) {
            val = nums1[p1--]
        } else if (nums1[p1] >= nums2[p2]) {
            val = nums1[p1--]
        } else {
            val = nums2[p2--]
        }
        nums1[tail--] = val
    }
}

let nums1 = [0], m = 0, nums2 = [1], n = 1
merge(nums1, m, nums2, n)
console.log(nums1)

/* 
    2021/7/21
    快慢指针+字符串
    为避免插在数组中插入元素使后部元素后移，从后往前拷贝数组可以原地且省时
*/