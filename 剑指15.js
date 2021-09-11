/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function (n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        if ((n & (1 << i)) !== 0) {
            res++
        }
    }
    return res
};

/* 
    2021/9/11
    20 21
    位运算，看不懂。。
*/