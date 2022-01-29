function highestPeak(isWater: number[][]): number[][] {
    const D = [[1, 0], [0, 1], [0, -1], [-1, 0]]
    const m = isWater.length, n = isWater[0].length
    let queue: number[][] = new Array(), height: number = 0
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (isWater[i][j] === 1) {
                isWater[i][j] = 0
                queue.push([i, j])
            } else {
                isWater[i][j] = 99999999
            }
    while (queue.length > 0) {
        const nxt = new Array()
        height++
        for (const point of queue)
            for (const dir of D) {
                const nx = point[0] + dir[0], ny = point[1] + dir[1]
                if (nx >= 0 && ny >= 0 && nx < m && ny < n && isWater[nx][ny] > height) {
                    isWater[nx][ny] = height
                    nxt.push([nx, ny])
                }
            }
        queue = nxt
    }
    return isWater
}

/* 
    2022/01/29
    100 100
    BFS
    每次清空队列后增加高度
*/