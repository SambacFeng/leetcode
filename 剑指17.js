/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function (n) {
    let res = []
    for (let i = 1; i < 10 ** n; i++) {
        res.push(i)
    }
    return res
};

/* 
    2021/8/15
    lc好像并没有给出很离谱的测试点
    考虑到js数组的最大容量为2^32 - 1，小于Number的最大值2^53，直接写就行
*/