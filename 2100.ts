function goodDaysToRobBank(security: number[], time: number): number[] {
    const n: number = security.length
    const res: number[] = []
    const left: number[] = new Array(n).fill(0), right: number[] = new Array(n).fill(0)
    for (let i = 1; i < n; i++)
        if (security[i] <= security[i - 1])
            left[i] = left[i - 1] + 1
    for (let i = n - 1; i > 0; i--)
        if (security[i] <= security[i + 1])
            right[i] = right[i + 1] + 1
    for (let i = time; i < n - time; i++)
        if (left[i] >= time && right[i] >= time)
            res.push(i)
    return res
}

/* 
    2022/03/06
    100 9
    前缀和
    数组值峰/谷问题考虑分别从两侧向中间遍历进行前/后缀和预处理
*/