function pushDominoes(dominoes: string): string {
    const s: string[] = [...dominoes]
    let n: number = s.length, i: number = 0
    let left: string = 'L'
    while (i < n) {
        let j: number = i
        while (j < n && s[j] == '.') { // 找到一段连续的没有被推动的骨牌
            j++
        }
        const right = j < n ? s[j] : 'R'
        if (left === right) { // 方向相同，那么这些竖立骨牌也会倒向同一方向
            while (i < j) {
                s[i++] = right
            }
        } else if (left === 'R' && right === 'L') { // 方向相对，那么就从两侧向中间倒
            let k: number = j - 1
            while (i < k) {
                s[i++] = 'R'
                s[k--] = 'L'
            }
        }
        left = right
        i = j + 1
    }
    return s.join('')
}

/* 
    2022/02/22
    100 50
    今天的脑子跟日子一样2
    面试也面的乱七八糟，做题也做不出来
    抄下官解学习一下
*/