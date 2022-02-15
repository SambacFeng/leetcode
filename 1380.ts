function luckyNumbers(matrix: number[][]): number[] {
    let a: number = -1, b: number = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < matrix.length; i++) {
        let cur: number = Number.MAX_SAFE_INTEGER
        for (let j = 0; j < matrix[i].length; j++)
            cur = Math.min(cur, matrix[i][j])
        a = Math.max(a, cur)
    }
    for (let j = 0; j < matrix[0].length; j++) {
        let cur = -1
        for (let i = 0; i < matrix.length; i++)
            cur = Math.max(cur, matrix[i][j])
        b = Math.min(b, cur)
    }
    return a === b ? [a] : []
}

/* 
    2022/02/16
    71 57
    模拟
    找鞍点？
    数组元素是唯一的，找到两种情况下符合条件的元素比较它们是否相同即可
*/