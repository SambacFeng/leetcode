function maximumDifference(nums: number[]): number {
    let res: number = -1, min: number = nums[0]
    for (let i = 1; i < nums.length; i++) nums[i] > min ? res = Math.max(res, nums[i] - min) : min = nums[i]
    return res
}

/* 
    2022/02/26
    100 13
    数组
*/