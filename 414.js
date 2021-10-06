/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let firstMax = Number.MIN_SAFE_INTEGER
    let secondMax = Number.MIN_SAFE_INTEGER
    let thirdMax = Number.MIN_SAFE_INTEGER
    nums.forEach(e => {
        if (e > firstMax) {
            thirdMax = secondMax
            secondMax = firstMax
            firstMax = e
        } else if (e < firstMax && e > secondMax) {
            thirdMax = secondMax
            secondMax = e
        } else if (e < secondMax && e > thirdMax) {
            thirdMax = e
        }
    })
    return thirdMax === Number.MIN_SAFE_INTEGER ? firstMax : thirdMax
}

/* 
    2021/10/6
    75 99
    每日一水了属于是
*/