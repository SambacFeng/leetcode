function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const m = new Map()
    for (let i: number = 0; i < nums.length; i++) {
        const num = nums[i]
        if (m.has(num) && i - m.get(num) <= k) {
            return true
        }
        m.set(num, i)
    }
    return false
}

/* 
    2022/01/19
    67 7
    哈希表
*/