/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    if (num === 0) return "0"
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
    let res = []
    if (num < 0) {
        num = Math.pow(2, 32) - Math.abs(num)
    }
    while (num) {
        res.unshift(hex[num % 16])
        num = Math.floor(num / 16)
    }
    return res.join('')
}

/* 
    2021/10/2
    70 50
    值为0直接返回
    值为负数先用补码转换为正数再进行处理
    对于正数，迭代的除16求余作为结果，将结果插入在数组前方
*/