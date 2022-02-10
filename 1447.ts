function simplifiedFractions(n: number): string[] {
    const gcd = (a: number, b: number) => {
        if (!(a % b)) return b
        return gcd(b, a % b)
    }

    const res:string[] = []
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            if (gcd(i, j) === 1) {
                res.push(`${j}/${i}`)
            }
        }
    }
    return res
}

/* 
    2022/02/10
    100 25
    数学 模拟
    写了这么多lc，居然第一次写gcd...
*/