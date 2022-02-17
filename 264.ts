function nthUglyNumber(n: number): number {
    const dp: number[] = new Array(n + 1).fill(0)
    dp[1] = 1
    let p2: number = 1, p3: number = 1, p5: number = 1
    for (let i = 2; i <= n; i++) {
        let num2 = dp[p2] * 2,
            num3 = dp[p3] * 3,
            num5 = dp[p5] * 5
        dp[i] = Math.min(...[num2, num3, num5])
        if (dp[i] == num2) p2++
        if (dp[i] == num3) p3++
        if (dp[i] == num5) p5++
    }
    return dp[n]
}

/* 
    2022/02/17
    100 29
    数组 数学
    一开始的思路是遍历判断是否是丑数，需要n^2logn，会超时
    转而使用类似求fib数和线性筛素数的思路，每个丑数只会是由之前的丑数*2/3/5得来
    应该还可以再状态压缩滚动求来省空间，没继续优化了
*/