/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) return s
    let res = ''
    const find = (left, right) => {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }
        if (right - left - 1 > res.length) {
            res = s.slice(left + 1, right)
        }
        return
    }
    for (let i = 0; i < s.length; i++) {
        find(i ,i)
        find(i, i + 1)
    }

    return res
/*     const dp = (left, right) => {
        if (left > right) return false
        if (left === right) return true
        if (left + 1 === right && s[left] === s[right]) return true
        return (s[left] === s[right] && dp(left + 1, right - 1)) ? true : false
    }
    return dp(0, s.length - 1) */
};

/* 
    2021/8/21
    99 68
    中心扩散法
    对字符串中的每个字符分别从自身(长度为奇数)和自身及下一个字符(长度为偶数)进行中心扩散，在两端字符不相等时停下
    ！此时左右指针位于最长字串向外一位
    大于现结果截串存结果
*/

let str = "babad"
console.log(longestPalindrome(str)); 