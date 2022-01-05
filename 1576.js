/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
    const n = s.length
    const arr = s.split('')
    for (let i = 0; i < n; i++) {
        if (arr[i] === '?') {
            if (i === 0) {
                arr[i] = arr[i + 1] === 'a' ? 'b' : 'a'
            } else if (i === n - 1) {
                arr[i] = arr[i - 1] === 'a' ? 'b' : 'a'
            } else {
                if (arr[i - 1] === 'a' || arr[i + 1] === 'a') {
                    if (arr[i - 1] === 'b' || arr[i + 1] === 'b') {
                        arr[i] = 'c'
                    } else {
                        arr[i] = 'b'
                    }
                } else {
                    arr[i] = 'a'
                }
            }
        }
    }
    return arr.join('')
}

/* 
    2022/01/05
    80 95
    字符串
    大模拟
*/