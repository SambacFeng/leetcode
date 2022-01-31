function numberOfSteps(num: number): number {
    let res: number = 0
    while (num > 0) {
        num = num % 2 ? num -= 1 : num / 2
        res++
    }
    return res
}

/* 
    2022/01/31
    60 20
    模拟
*/