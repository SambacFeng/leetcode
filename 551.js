/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let a = false
    for (let i = 0; i <= s.length - 1; i++) {
        if (s[i] === 'L' && i < s.length - 2) {
            if (s[i + 1] === 'L' && s[i + 2] === 'L') {
                return false
            }
        }
        if (s[i] === 'A') {
            if (a) {
                return false
            } else {
                a = true
            }
        }
    }
    return true
};

/* 
    2021/8/17
    99.6 97.4
    又是我最喜欢的大模拟时间
*/