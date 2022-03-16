function twoSum(nums: number[], target: number): number[] {
    let m = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (m.has(target - nums[i])) {
            return [m.get(target - nums[i]), i]
        } else {
            m.set(nums[i], i)
        }
    }
    return []
}