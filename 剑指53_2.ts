function missingNumber(nums: number[]): number {
    let res: number = nums.length
    for (let i: number = 0; i < nums.length; i++) {
        res += i - nums[i]
    }
    return res
}

/* 
    2022/01/21
    84 62
    数组
*/