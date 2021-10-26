/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let m = new Map()
    let stack = []
    for (let i = nums2.length - 1; i >= 0; i--) {
        const num = nums2[i]
        while (stack.length && num >= stack[stack.length - 1]) {
            stack.pop()
        }
        m.set(num, stack.length ? stack[stack.length - 1] : -1)
        stack.push(num)
    }
    return new Array(nums1.length).fill(0).map((_, i) => m.get(nums1[i]))
}

/* 
    2021/10/26
    9 28
    单调栈 + 哈希表
    从后往前遍历nums2并使用单调栈记录，若栈为空则记录-1，否则栈顶元素即为结果
    遍历num1查哈希表即得结果
*/