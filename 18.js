/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function (nums, target) {
    const threeSum = (start, threeTarget) => {
        const twoSum = (start, twoTarget) => {
            let res = []
            let low = start, high = nums.length - 1
            while (low < high) {
                let sum = nums[low] + nums[high]
                let left = nums[low], right = nums[high]
                if (sum < twoTarget) {
                    while (low < high && left === nums[low]) low++
                } else if (sum > twoTarget) {
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
        for (let i = start; i < nums.length; i++) {
            let tmp = twoSum(i + 1, threeTarget - nums[i])
            for (let j = 0; j < tmp.length; j++) {
                tmp[j].push(nums[i])
                res.push(tmp[j])
            }
            while (i < nums.length - 1 && nums[i] == nums[i + 1]) {
                i++
            }
        }
        return res
    }

    let res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        let tmp = threeSum(i + 1, target - nums[i])
        for (let j = 0; j < tmp.length; j++) {
            tmp[j].push(nums[i])
            res.push(tmp[j])
        }
        while (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            i++
        }
    }
    return res
}

/* 
    2021/9/10
    44 16
    与twoSum推广到threeSum类似，多一层循环嵌套可推广到fourSum
    N^3
*/