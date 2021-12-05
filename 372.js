/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function (a, b) {
    const pow = (x, n) => {
        let res = BigInt(1)
        while (n) {
            if (n % 2) {
                res = res * BigInt(x) % MOD
            }
            x = x * x % MOD
            n = Math.floor(n / 2)
        }
        return res
    }

    const MOD = BigInt(1337)

    let ans = BigInt(1)
    for (let i = b.length - 1; i >= 0; --i) {
        ans = ans * pow(BigInt(a), b[i]) % MOD
        a = pow(BigInt(a), 10)
    }

    return ans
}

/* 
    2021/12/5
    21 5
    数学
    快速幂倒叙递推
    我再也不想写数学题了
*/