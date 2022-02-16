function findMinFibonacciNumbers(k: number): number {
    const fib: number[] = [1, 1]
    let prev: number = 1, curr: number = 1
    while (prev + curr <= k) {
        let tmp: number = prev + curr
        fib.push(tmp)
        prev = curr
        curr = tmp
    }
    let res: number = 0
    let idx = fib.length - 1
    while (k > 0) {
        while (fib[idx] > k) idx--
        k -= fib[idx]
        res++
    }
    return res
}

/* 
    2022/02/16
    96 85
    贪心 模拟
    每次减去一个最大的可用的fib数
*/