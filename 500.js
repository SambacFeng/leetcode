/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const kb = ["qwertyuiopQWERTYUIOP", "asdfghjklASDFGHJKL", "zxcvbnmZXCVBNM"]
    const alphabet = "qwertyuiopQWERTYUIOPasdfghjklASDFGHJKLzxcvbnmZXCVBNM"
    // 0-19 20-37 38-51
    let res = []
    for (let i = 0; i < words.length; i++) {
        let pos = alphabet.indexOf(words[i][0])
        let line = -1
        let flag = true
        if (pos >= 0 && pos <= 19) {
            line = 0
        } else if (pos >= 20 && pos <= 37) {
            line = 1
        } else if (pos >= 38 && pos <= 51) {
            line = 2
        }
        for (let c = 0; c < words[i].length; c++) {
            if (kb[line].indexOf(words[i][c]) === -1) {
                flag = false
                break
            }
        }
        if (flag) res.push(words[i])
    }

    return res
}

/* 
    2021/10/31
    85 99
    字符串模拟
*/