var MinStack = function () {
    this.s = []
    this.ms = []
    this.minVal = Number.MAX_SAFE_INTEGER
}

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.minVal = Math.min(this.minVal, val)
    this.s.push(val)
    this.ms.push(this.minVal)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.s.pop()
    this.ms.pop()
    this.minVal = this.s.length ? this.getMin() : Number.MAX_SAFE_INTEGER
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
MinStack.prototype.getMin = function () {
    return this.ms[this.ms.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/* 
    2021/12/14
    96 16
    栈 设计
*/