/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let num = Math.floor(nums.length / 2)
    let m = new Map()
    for (let i = 0; i < nums.length; i++) {
        m.set(nums[i], m.get(nums[i]) + 1 || 1)
        if (m.get(nums[i]) > num) return nums[i]
    }
}

/* 
    2021/12/22
    29 70
    哈希表
    一次遍历
*/