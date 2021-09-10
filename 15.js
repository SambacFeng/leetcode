/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const twoSum = (start, target) => {
        let res =[]
        let low = start, high = nums.length - 1
        while (low < high) {
            let sum = nums[low] + nums[high]
            let left = nums[low], right = nums[high]
            if (sum < target) {
                while (low < high && left === nums[low]) low++
            } else if (sum > target) {
                while (low < high && right === nums[high]) high--
            } else {
                res.push([left, right])
                while (low < high && left === nums[low]) low++
                while (low < high && right === nums[high]) high--
            }
        }
        return res
    }

    let res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        let tmp = twoSum(i + 1, 0 - nums[i])
        for (let j = 0; j < tmp.length; j++) {
            tmp[j].push(nums[i])
            res.push(tmp[j])
        }
        while (i < nums.length - 1 && nums[i]== nums[i + 1]) {
            i++
        }
    }
    return res
};

/* 
    2021/9/10
    75 12
    利用两数之和twoSum的函数，对nums中的每一个数字，求其后的两数之和并与该数结合看能否满足条件(和为0)
    注意去重，当连续的两个数字相同时直接跳过，保证第一个数字不会重复
    在twoSum里用类似的方法保证后两个数字不会重复
    由于需要遍历整个数组，同时在遍历的过程中执行twoSum(时间复杂度N)，故整个程序的时间复杂度为N^2
*/

let nums = [-1,0,1,2,-1,-4]

console.log(threeSum(nums));