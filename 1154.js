/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    const [year, month, day] = date.split('-').map(v => +v)
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (year % 400 === 0 || year % 100 !== 0 && year % 4 === 0) days[1] = 29
    let res = 0
    for (let i = 0; i < month - 1; i++) res += days[i]
    return res + day
}

/* 
    2021/12/21
    36 11
    模拟
    判断闰年
*/