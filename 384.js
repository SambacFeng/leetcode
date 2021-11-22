/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums
    this.init = Array.from(nums)
}

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    this.nums = Array.from(this.init)
    return this.nums
}

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    const res = new Array(this.nums.length).fill(0)
    const arr = Array.from(this.nums)
    for (let i = 0; i < this.nums.length; i++) {
        res[i] = arr.splice(Math.random() * arr.length, 1)
    }
    this.nums = Array.from(res)
    return this.nums
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

/* 
    2021/11/22
    5 10
    第一次写设计题，过了就算成功
*/