/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    return parseInt(new Array(num.toString(2).length).fill(1).join(''), 2) ^ num
}

/* 
    2021/10/18
    77 7
    位运算，转成二进制再与全1异或即为求反
*/