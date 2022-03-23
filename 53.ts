function maxSubArray(nums: number[]): number {
    let res: number = nums[0]
    nums.reduce((prev, curr) => {
        const value = Math.max(prev + curr, curr)
        res = Math.max(res, value)
        return value
    }, 0)
    return res
/*     const n: number = nums.length
    let prev: number = nums[0], curr: number = 0
    for (let i = 1; i < n; i++) {
        curr = Math.max(nums[i], nums[i] + prev)
        res = Math.max(res, curr)
        prev = curr
    }
    return res */
}

/* 
    2022/03/23
    92 56
    数组
*/