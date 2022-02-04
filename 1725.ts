function countGoodRectangles(rectangles: number[][]): number {
    let maxLen: number = 0, res: number = 0
    rectangles.forEach(e => {
        const len = Math.min(...e)
        if (len > maxLen) {
            maxLen = len
            res = 1
        } else if (len === maxLen) {
            res++
        }
    })
    return res
}

/* 
    2020/02/04
    67 33
    数组
*/