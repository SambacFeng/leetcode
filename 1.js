/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let m = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (m.has(target - nums[i])) {
            return [m.get(target - nums[i]), i]
        } else {
            m.set(nums[i], i)
        }
    }
    return []
};

/* 
    2021/9/4
    95 18
    哈希表，空间换时间
    赶一天路了，水一题
*/