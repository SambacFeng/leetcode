/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
    let fast = 0
    let slow = 0
    while (fast < nums.length) {
        if (nums[slow] !== nums[fast]) {
            nums[++slow] = nums[fast]
        }
        fast++
    }
    return ++slow
}

let testArr = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(testArr))
console.log(testArr)

/* 
    2021/7/20
    首先想到的解法是利用Array的splice方法
    var removeDuplicates = function (nums) {
    let i = 0
    while (i < nums.length) {
        while (nums[i] === nums[i + 1]) {
            nums.splice(i, 1)
        }
        i++
    }
    return nums.length
    但splice方法每次需要调整数组，时间复杂度较高，尤其在连续重复较多的情况下
    题解中提到快慢指针法，在快慢指针位置值相等的时候前移快指针，直到不等的时候将快指针的值复制到慢指针处
    此方法无需调整数组，结合题设无需考虑多余出来的数组内容，是较优解
} */