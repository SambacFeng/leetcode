function getLeastNumbers(arr: number[], k: number): number[] {
    return arr.sort((a, b) => a - b).slice(0, k)
}

/* 
    2022/01/26
    68 70
    排序
    水一个
*/