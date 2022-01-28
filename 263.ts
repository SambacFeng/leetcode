function isUgly(n: number): boolean {
    if (n <= 0) return false
    if (n === 1) return true
    const factors = [2, 3, 5]
    for (const factor of factors) {
        while (n % factor === 0) {
            n /= factor
        }
    }
    return n === 1
}

/* 
    2022/01/28
    100 5
    数学
*/