/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
    let m = new Map()
    let count = new Array(10).fill(0)
    let res = ""
    for (let i = 0; i < s.length; i++) {
        m.set(s[i], m.get(s[i]) + 1 || 1)
    }
    count[8] = m.get('g') || 0
    count[4] = m.get('u') || 0
    count[2] = m.get('w') || 0
    count[6] = m.get('x') || 0
    count[0] = m.get('z') || 0

    count[5] = (m.get('f') || 0) - count[4]
    count[3] = (m.get('h') || 0) - count[8]
    count[7] = (m.get('s') || 0) - count[6]

    count[9] = (m.get('i') || 0) - count[5] - count[6] - count[8]
    count[1] = (m.get('n') || 0) - count[7] - count[9] * 2

    for (let i = 0; i < 10; i++) {
        while(count[i]--) res += `${i}`
    }
    return res
}

/* 
    2021/11/24
    23 58
    字符串 模拟
    一开始以为是写程序解十元线性方程组，然后发现是自己手动解。。
*/

originalDigits("owoztneoer")

/* 
    zero
    one
    two
    three
    four
    five
    six
    seven
    eight
    nine

    e   0 1   3   5   7 8 9
    g                   8
    f           4 5
    i             5 6   8 9
    h         3         8
    o   0 1 2   4
    n     1           7   9
    s               6 7
    r   0     3 4 
    u           4
    t       2 3         8
    w       2
    v             5   7
    x               6
    z   0
*/