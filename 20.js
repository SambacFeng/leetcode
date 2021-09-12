/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stuck = []
    for (let i = 0; i < s.length; i++) {
        let ch = s[i]
        if (ch === '(' || ch === '{' || ch === '[') {
            stuck.push(ch)
        } else {
            if (stuck.length === 0) {
                return false
            } else {
                let topCh = stuck.pop()
                if (ch === ')') {
                    if (topCh !== '(') {
                        return false
                    }
                } else if (ch === '}') {
                    if (topCh !== '{') {
                        return false
                    }
                } else {
                    if (topCh !== '[') {
                        return false
                    }
                }
            }
        }
    }
    return stuck.length ? false : true
}

/* 
    2021/9/12
    47 90
    栈的基础应用，遇到左括号时入栈，遇到右括号时与栈顶元素进行匹配
    遍历结束后判断栈是否为空(是不是多左括号)
*/