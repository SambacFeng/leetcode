/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    if (word.length === 1) return true
    let first = word.charCodeAt(0)
    if (first >= 65 && first <= 90) {
        for (let i = 2; i < word.length; i++) {
            let curr = word.charCodeAt(i)
            let pre = word.charCodeAt(i - 1)
            if (curr >= 65 && curr <= 90 && pre >= 97 && pre <= 122
                || curr >= 97 && curr <= 122 && pre >= 65 && pre <= 90)
                return false
        }
    } else {
        for (let i = 1; i < word.length; i++) {
            let curr = word.charCodeAt(i)
            if (curr < 97) return false
        }
    }
    return true
}

/* 
    2021/11/13
    56 88
    字符串模拟
    如果首字符是大写，那后面所有的都要一样
    如果首字符是小写，那出现大写就不行
*/