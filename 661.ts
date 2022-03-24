function imageSmoother(img: number[][]): number[][] {
    const m = img.length, n = img[0].length
    const res = new Array(m).fill(0).map(_ => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let sum = 0, count = 0
            for (let row = i - 1; row <= i + 1; row++) {
                for (let col = j - 1; col <= j + 1; col++) {
                    if (row >= 0 && row < m && col >= 0 && col < n) {
                        count++
                        sum += img[row][col]
                    }
                }
            }
            res[i][j] = Math.floor(sum / count)
        }
    }
    return res
}

/* 
    2022/03/24
    85 8
    数组
*/