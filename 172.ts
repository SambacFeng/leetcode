function trailingZeroes(n: number): number {
    let ans = 0
    for (let i = 5; i <= n; i += 5) {
        for (let x = i; x % 5 == 0; x /= 5) {
            ++ans
        }
    }
    return ans
}

/* 
    2022/03/25
    100 29
    数学
    题解看懵逼了，可怜的自己写的模拟，被数学解法玩弄于股掌之间
*/