/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let len = s.length
    s = s.split('')
    for (let i = 0; i < len; i += 2 * k) {
        let left = i, right = i + k > len ? len : i + k - 1
        while (left < right) {
            [s[left], s[right]] = [s[right], s[left]]
            left++
            right--
        }
    }

    return s.join('')
}

/* 
    2021/9/25
    23 21
    模拟，注意翻转起止点，通过控制for循环的步进量方便解题
*/

let s = "abcdefg", k = 2
reverseStr(s, k)