/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let slow = 0, fast = 0
    while (fast < nums.length) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
}

let testArr = [0,1,2,2,3,2,2,2,2,2,0,4,2]
console.log(removeElement(testArr, 2))
console.log(testArr)

/* 
    2021/7/20
    快慢指针，要保留的数由快指针赋值到慢指针，然后快慢指针同时增大，要去除的数仅增大快指针直接跳过
*/