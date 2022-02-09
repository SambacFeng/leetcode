function countKDifference(nums: number[], k: number): number {
    let m = new Map()
    let res: number = 0
    nums.forEach(num => {
        m.set(num, m.get(num) + 1 || 1)
    })
    m.forEach((val, num) => {
        if (num + k > 100) return res
        if (m.has(num + k)) {
            res += val * m.get(num + k)
        }
    })
    return res
}

/* 
    2022/02/09
    90 10
    数组 哈希表
*/