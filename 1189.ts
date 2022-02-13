function maxNumberOfBalloons(text: string): number {
    const chars = ['b', 'a', 'l', 'o', 'n']
    const count = new Array(5).fill(0)
    let res: number = 0
    for (let ch of text) {
        if (chars.indexOf(ch) !== -1) count[chars.indexOf(ch)]++
    }
    while (count[0] >= 1 && count[1] >= 1 && count[2] >= 2 && count[3] >= 2 && count[4] >= 1) {
        count[0] -= 1
        count[1] -= 1
        count[2] -= 2
        count[3] -= 2
        count[4] -= 1
        res++
    }
    return res
}

/* 
    2022/02/13
    90 10
    模拟
    普及组D1T1水平。。
*/