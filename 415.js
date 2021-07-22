/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let addStrings = function (num1, num2) {
    let arr1 = num1.split('')
    let arr2 = num2.split('')
    len = Math.max(arr1.length, arr2.length)
    while (arr1.length < len) {
        arr1.unshift('0')
    }
    while (arr2.length < len) {
        arr2.unshift('0')
    }
    for (let i = len - 1; i > -1; i--) {
        arr1[i] = arr1[i] * 1 + arr2[i] * 1
        if (i && arr1[i] > 9) {
            arr1[i - 1]++
            arr1[i] %= 10
        }
    }
    return arr1.join('')
}

let num1 = "123456789", num2 = "987654321"
console.log(addStrings(num1, num2))

/* 
    2021/7/23
    大数相加，先将字符串转换为字符数组，对齐，模拟竖式计算
    回到高中，就这还WA一次，脸都不要了
*/