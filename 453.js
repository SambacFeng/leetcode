/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    let res = 0
    let min = Math.min(...nums)
    nums.forEach(e => {
        res += (e - min)
    })
    return res
}

/* 
    2021/10/20
    57 35
    每次将n-1个数+1到最大值 === 每次将1个数-1到最小值
*/