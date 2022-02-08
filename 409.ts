function longestPalindrome(s: string): number {
    const m = new Set()
    let res: number = 0
    for (let i = 0; i< s.length; i++) {
        if (m.has(s[i])) {
            res += 2
            m.delete(s[i])
        } else {
            m.add(s[i])
        }
    }
    if (m.size) {
        res++
    }
    return res

/*     const a: number[] = new Array(128).fill(0)
    let res: number = 0
    for (let i = 0; i < s.length; i++) {
        a[s.charCodeAt(i)]++
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= 2) {
            res += a[i] - a[i] % 2
            a[i] = a[i] % 2
        }
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i]) {
            res++
            break
        }
    }
    return res */
}

/* 
    2022/02/08
    98 6
    字符串
    题目不要求顺序，使用数组存储，一次遍历统计字符数量，每有两个相同字符就res+2，有多余字符还可选一个作为中轴
    换用哈希表存储，92 6
*/