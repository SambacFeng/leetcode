function minimumDifference(nums: number[], k: number): number {
    nums = nums.sort((a, b) => a - b)
    let res: number = 999999
    for (let i = 0; i < nums.length + 1 - k; i++) {
        res = Math.min(res, nums[i + k - 1] - nums[i])
    }
    return res
}

/* 
    2022/02/11
    67 17
    数组
*/