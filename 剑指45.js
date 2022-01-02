/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
    return nums.sort((a, b) => (a.toString() + b.toString()) - (b.toString() + a.toString())).join('')
}

/* 
    2022/01/02
    46 95
    字符串 排序 数组
    自定义排序函数，比较相邻两个数值拼接后的大小
*/