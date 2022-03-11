function addStrings(num1: string, num2: string): string {
    let p1: number = num1.length - 1, p2: number = num2.length - 1
    let flag: number = 0
    const res: number[] = []
    while (p1 >= 0 || p2 >= 0) {
        const d1 = p1 >= 0 ? parseInt(num1[p1--]) : 0
        const d2 = p2 >= 0 ? parseInt(num2[p2--]) : 0
        let digit: number = d1 + d2 + flag
        res.unshift(digit % 10)
        flag = Math.floor(digit / 10)
    }
    if (flag) res.unshift(1)
    return res.join('')
}

/* 
    2022/03/11
    9 18
    字符串
*/