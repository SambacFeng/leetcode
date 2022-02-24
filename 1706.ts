function findBall(grid: number[][]): number[] {
    const m: number = grid.length, n: number = grid[0].length
    const res: number[] = new Array(n).fill(0).map((v, i) => v = i)
    // 维护一个res数组代表初始时下标对应处的球现在在何处，初始状态映射为i -> i
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (res[j] !== -1) { // 当前不是死路
                if (grid[i][res[j]] === 1) {
                    res[j] = (res[j] === n - 1 || grid[i][res[j] + 1] === -1 ? -1 : res[j] + 1)
                } else {
                    res[j] = (res[j] === 0 || grid[i][res[j] - 1] === 1 ? -1 : res[j] - 1)
                }
            }
        }
    }
    return res
}

/* 
    2022/02/24
    100 100
    dp
    模拟 + dp
    好像是第二个双百?
*/