/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let m = new Map()

    const getSum = (num) => {
        let sum = 0
        while (n) {
            sum += (n % 10) ** 2
            n = Math.floor(n / 10)
        }
        return sum
    }

    while (true) {
        // n出现过，证明已陷入无限循环
        if (m.has(n)) return false
        if (n === 1) return true
        m.set(n, 1)
        n = getSum(n)
    }
}

/* 
    2021/9/17
    90 71

    65 88
    换用递归版本的求平方和
    const getSum = (num) => {
        if (num < 10) return num * num
        let r = num % 10
        return r * r + getSum((num - r) / 10)
    }
*/

isHappy(19)