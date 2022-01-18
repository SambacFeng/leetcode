function findMinDifference(timePoints: string[]): number {
    const a = new Array(2880).fill(0)
    let res: number = 3000
    let lastIdx: number = -1
    timePoints.forEach(e => {
        const t = e.split(":")
        a[Number(t[0]) * 60 + Number(t[1])]++
        a[Number(t[0]) * 60 + Number(t[1]) + 1440]++
    })
    for (let i: number = 0; i < 2880; i++) {
        if (a[i]) {
            if (a[i] > 1) return 0
            if (lastIdx === -1) {
                lastIdx = i
            } else {
                res = Math.min(res, i - lastIdx)
                lastIdx = i
            }
        }
    }
    return res
}

/* 
    2022/01/18
    75 25
    计数排序 倍长数组
    每分钟一个桶，将所有时间按时间点丢入不同的桶内
    为了跨天统计将桶加倍，一次处理两个桶
*/