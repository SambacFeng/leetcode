/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let half = star = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            half++
        } else if (s[i] === '*') {
            star++
        } else {
            if (half) {
                half--
            } else if (star) {
                star--
            } else {
                return false
            }
        }
    }
    half = star = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ')') {
            half++
        } else if (s[i] === '*') {
            star++
        } else {
            if (half) {
                half--
            } else if (star) {
                star--
            } else {
                return false
            }
        }
    }
    return true
}

/* 
    2021/9/12
    方法一：栈
    77 20
    维护两个栈，分别记录左括号和星号的位置，遇到右括号时判断合法性
    在遍历到末尾后判断是否有多余左括号，如果有的话看有没有星号与之匹配
    let left = []
    let star = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            left.push(i)
        } else if (s[i] === '*') {
            star.push(i)
        } else {
            if (left.length) {
                left.pop()
            } else if (star.length) {
                star.pop()
            } else {
                return false
            }
        }
    }
    while (left.length && star.length) {
        let leftIndex = left.pop()
        let starIndex = star.pop()
        if (leftIndex > starIndex) {
            return false
        }
    }
    if (left.length) {
        return false
    }
    return true

    方法二：贪心
    77 90
    维护两个数值分别代表可接受的右括号的最大值和最小值
    遇到左括号时均加一，遇到星号时最大值加一，最小值减一，同时保证最小值不小于0
    若最大值小于0则右括号多于可用的左括号，返回false
    若遍历结束后仍有剩余的左括号，即min>0，返回false
    let min = max = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            max++
            min++
        } else if (s[i] === '*') {
            max++
            if (min) {
                min--
            }
        } else {
            max--
            if (min) {
                min--
            }
        }
        if (max < 0) {
            return false
        }

    }
    return min ? false : true

    方法三：模拟
    99 96
    分别从两个方向判断合法性，等同于对基础的括号匹配做正反两次遍历
    属于是看起来很长但是全都是重复代码。。跑起来很快
*/

checkValidString("****(**")