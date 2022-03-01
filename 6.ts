function convert(s: string, numRows: number): string {
    const len = s.length, m = numRows
    if (m >= len || m === 1) return s
    const t = m * 2 - 2 // 周期
    const res = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < len - i; j += t) {
            res.push(s[j + i])
            if (0 < i && i < m - 1 && j + t - i < len) {
                res.push(s[j + t - i])
            }
        }
    }
    return res.join('')
}

/* 
    2022/03/01
    88 24
    字符串
    模拟一个二维数组并压缩成字符串形式
*/