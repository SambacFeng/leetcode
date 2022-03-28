function hasAlternatingBits(n: number): boolean {
    let prev: number = 2
    while (n) {
        const curr: number = n % 2
        if (prev === curr) return false
        prev = curr
        n = n >> 1
    }
    return true

/*     const a = n ^ (n >> 1)
    return (a & (a + 1)) === 0 */
}

/* 
    2022/03/28
    46 25
    模拟 位运算
    位运算哈人
*/