function optimalDivision(nums: number[]): string {
    const len: number = nums.length
    if (len === 1) return nums.toString()
    else if (len === 2) return `${nums[0]}/${nums[1]}`
    else return `${nums.shift().toString()}/(${nums.join('/')})`
}

/* 
    2022/02/27
    100 33
    数学
    一眼dp，dp写一半感觉不对劲，要得最大数就要设法用最大数除以最小数，都是正整数那只能越除越小，就用第一个数除以后面所有数连除的结果即可
*/