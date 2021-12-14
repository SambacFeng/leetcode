/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.s = []
    this.ms = []
    this.minNum = Number.MAX_SAFE_INTEGER
}

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.minNum = Math.min(this.minNum, x)
    this.s.push(x)
    this.ms.push(this.minNum)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.s.pop()
    this.ms.pop()
    if (!this.s.length) this.minNum = Number.MAX_SAFE_INTEGER
    else this.minNum = this.min()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.s[this.s.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.ms[this.ms.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

/* 
    2021/12/14
    35 10
    栈 设计
    使用额外的一个栈存放最小值，注意pop的时候及时更新最小值
*/
["MinStack", "push", "push", "push", "top", "pop", "min", "pop", "min", "pop", "push", "top", "min", "push", "top", "min", "pop", "min"]
[[], [2147483646], [2147483646], [2147483647], [], [], [], [], [], [], [2147483647], [], [], [-2147483648], [], [], [], []]

["MinStack","push","push","min","min","push","min","min","top","min","pop","push","push","min","push","pop","top","min","pop"]
[[],[-10],[14],[],[],[-20],[],[],[],[],[],[10],[-7],[],[-7],[],[],[],[]]