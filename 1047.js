/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let num = 0
    let stack = []
    stack.push(s[num++])
    while (ch = s[num++]) {
        ch === stack[stack.length - 1] ? stack.pop() : stack.push(ch)
    }
    return stack.join('')
}

/* 
    2021/10/2
    61 9
*/

removeDuplicates("abbaca")