/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isIsomorphic = function(s, t) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
            return false
        }
    }
    return true
}

console.log(isIsomorphic("foo", "bar")); 

/* 
    2021/7/24
    对于每个位置的字符，下一次出现这个字符的位置总是相同的
*/