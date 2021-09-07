/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let ans = 0, d = 0
    for (let i = 0; i < s.length; i++) {
        let ch = s[i]
        if (ch === 'L') {
            ++d
        } else {
            --d
        }
        if (d === 0) {
            ++ans
        }
    }
    return ans
};

/* 
    2021/9/7
    80 65
    一开始以为是回溯或者dp
    后来发现想多了，一道简单而已，直接大模拟
*/