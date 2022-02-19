function pancakeSort(arr: number[]): number[] {
    const reverse = (idx: number) => {
        let i: number = 0, j: number = idx
        while (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
            ;j--
        }
    }

    const res: number[] = new Array()
    for (let i = arr.length - 1; i > 0; i--) {
        let j = i
        while (j > 0) {
            if (arr[j] == i + 1) break
            j--
        }
        if (j < i) {
            if (j > 0) {
                res.push(j + 1)
                reverse(j)
            }
            res.push(i + 1)
            reverse(i)
        }
    }

    return res
}

/* 
    2022/02/19
    100 14
    数组
    读了半天题，愣是没懂跟煎饼有啥关系，看官解才知道
*/