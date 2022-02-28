function complexNumberMultiply(num1: string, num2: string): string {
    let r1: number, i1: number, r2: number, i2: number
    [r1, i1] = [parseInt(num1.split('+')[0]), parseInt(num1.split('+')[1].slice(0, -1))]
    ;[r2, i2] = [parseInt(num2.split('+')[0]), parseInt(num2.split('+')[1].slice(0, -1))]
    return `${r1 * r2 - i1 * i2}+${r1 * i2 + r2 * i1}i`
}

/* 
    2022/02/28
    16 50
    数学 字符串
    数学很简单，字符串处理比数学费劲
*/