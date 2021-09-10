/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let total = 0
    chalk.forEach(e => total += e)
    k %= total
    for (let i = 0; i < chalk.length; i++) {
        if (k < chalk[i]) {
            return i
        }
        k -= chalk[i]
    }
};

/* 
    2021/9/10
    89 24
    空间换时间，如果不使用额外空间
    let i = 0
    while (k > 0) {
        if (k < chalk[i]) {
            return i
        }
        k -= chalk[i]
        i++
        if (i >= chalk.length) {
            i -= chalk.length
        }
    }
    就是13 87
*/

chalkReplacer([3,4,1,2], 25)