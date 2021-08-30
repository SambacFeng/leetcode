/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let n = nums.length
    let best = -1

    for (let i = 0; i < n; i++) {
        if (i + nums[i] > best) {
            best = i + nums[i]
        }
        if (best >= n - 1) {
            return true
        }
        if (best <= i) {
            return false
        }
    }
};

/* 
    2021/8/30
    70 51
    维护一个目前能跳到的最远距离，在最远距离达到或超过数组最后一个元素时返回真，在小于(理论不存在)等于i(即在最远距离时)立定跳远了时返回假
*/