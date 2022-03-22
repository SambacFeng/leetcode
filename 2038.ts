function winnerOfGame(colors: string): boolean {
    let countA: number = 0, countB: number = 0
    let ch: string = ''
    let count: number = 0
    for (let i = 0; i < colors.length; i++) {
        if (colors[i] !== ch) {
            ch = colors[i]
            count = 1
        } else {
            count++
            if (count >= 3) {
                ch === 'A' ? countA++ : countB++
            }
        }
    }
    return countA > countB
}

/* 
    2022/03/22
    86 71
    模拟 贪心
    遇到有连续超过三个的相同字符就可以删一个，统计可以删的字符数量谁多谁赢
*/