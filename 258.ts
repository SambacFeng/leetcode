function addDigits(num: number): number {
    while (num >= 10) {
        let sum: number = 0
        while (num) {
            sum += num % 10
            num = Math.floor(num / 10)
        }
        num = sum
    }
    return num
}

/* 
    2022/03/03
    75 28
    模拟
*/