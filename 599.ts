function findRestaurant(list1: string[], list2: string[]): string[] {
    let sum: number = Number.MAX_SAFE_INTEGER
    let res: string[] = []
    list1.forEach((v, i) => {
        const i2 = list2.indexOf(v)
        if (i2 !== -1) {
            if (sum === i + i2) {
                res.push(v)
            } else if (sum > i + i2) {
                sum = i + i2
                res = [v]
            }
        }
    })
    return res
}

/* 
    2022/03/14
    67 59
    数组
*/