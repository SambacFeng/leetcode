/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
    const words = text.split(' ')
    const n = words.length
    const res = []
    for (let i = 0; i < n - 2; i++) {
        if (words[i] === first) {
            if (words[i + 1] === second) {
                res.push(words[i + 2])
            }
        }
    }

    return res
}

/* 
    2021/12/26
    8 57
    字符串
*/