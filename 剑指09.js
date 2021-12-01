var CQueue = function () {
    this.s1 = []
    this.s2 = []
}

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.s1.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (!this.s2.length) {
        if (!this.s1.length) return -1
        else while(this.s1.length) this.s2.push(this.s1.pop())
    }
    return this.s2.pop()
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

/* 
    2021/12/1
    97 53
    设计 数据结构
*/