/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let single = 0
    nums.forEach(e => {
        single ^= e
    })
    return single
}

/* 
    2021/10/30
    83 99
    位运算，自己与自己异或，结果是0，0与任意数异或，结果是那个数
    0与数组中所有元素异或一遍，两个的都与自己异或过了，剩一个单个的
*/