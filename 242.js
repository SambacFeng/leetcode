/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    let a1 = new Array(26).fill(0)
    let a2 = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        a1[s.charCodeAt(i) - 97]++
        a2[t.charCodeAt(i) - 97]++
    }
    for (let i = 0; i < 26; i++) {
        if (a1[i] !== a2[i]) {
            return false
        }
    }
    return true
}

let s = "ayay", t = "yaya"
console.log(isAnagram(s, t)); 

/* 
    2021/7/23
    使用string.charCodeAt(index)可以获取字符的Unicode码，再放入Map进行计数
    let m1 = new Map(), m2 = new Map()
    for (let i = 0; i < s.length; i++) {
        if (m1.has(s.charCodeAt(i))) {
            m1.set(s.charCodeAt(i), m1.get(s.charCodeAt(i)) + 1)
        } else {
            m1.set(s.charCodeAt(i), 1)
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (m2.has(t.charCodeAt(i))) {
            m2.set(t.charCodeAt(i), m2.get(t.charCodeAt(i)) + 1)
        } else {
            m2.set(t.charCodeAt(i), 1)
        }
    }
    for (let ch = 97; ch <= 122; ch ++) {
        if (m1.get(ch) !== m2.get(ch)) {
            return false
        }
    }

    做完想了想我都转Unicode了我为啥不用数组非要用Map啊。。。
    然后用数组优化了一版，从95%/64%变成98%/96%

    打开题解
    return s.length == t.length && [...s].sort().join('') === [...t].sort().join('')
    ......
    我是傻逼

    看了看还可以少用一个数组，不用两个数组比较，可以s对数组++然后t对数组--，判断值是否是0
*/