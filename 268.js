/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let res = nums.length
    for (let i = 0; i < nums.length; i++) {
        res += i - nums[i]
    }
    return res
}

/* 
    2021/11/6
    方法一：哈希表，遍历一遍全部加入
    77 5
    let s = new Set(nums)
    nums.forEach(e => {
        s.add(e)
    })
    for (let i = 0; i <= nums.length; i++) {
        if (!s.has(i)) return i
    }

    方法二：一次遍历，将所有下标和累加，减去存在的元素，剩下的就是不存在的元素
    95 84

    方法三：高斯求和算法，相当于把方法二的遍历过程中加和的部分集中起来，复杂度差别不大
*/