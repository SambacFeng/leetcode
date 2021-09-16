/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let fast = slow = 0, len = Number.MAX_SAFE_INTEGER, sum = 0
    while (fast < nums.length) {
        sum += nums[fast++]
        while (sum >= target) {
            if (fast - slow < len) len = fast - slow
            sum -= nums[slow++]
        }
    }
    return len === Number.MAX_SAFE_INTEGER ? 0 : len
}

/* 
    2021/9/16
    32 90
    滑动窗口，O(N)
*/

target = 7, nums = [2, 3, 1, 2, 4, 3]
minSubArrayLen(target, nums)