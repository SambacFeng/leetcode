function isOneBitCharacter(bits: number[]): boolean {
    let idx: number = 0, n: number = bits.length - 1
    while (idx < n) {
        idx += bits[idx] ? 2 : 1
    }
    return idx === n
}

/* 
    2022/02/20
    100 29
    数组
    0开头就是一个bit，1开头就是两个bit，根据当前位置往前跳一个直到最后看是否刚好到达末尾
*/