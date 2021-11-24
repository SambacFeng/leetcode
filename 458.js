/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
    let times = minutesToTest / minutesToDie
    // (times + 1) ** pigs >= buckets
    // pigs = log(buckets) / log(times + 1)
    let pigs = Math.ceil(Math.log(buckets) / Math.log(times + 1))
    return pigs
}

/* 
    2021/11/25
    80 64
    数学
    N分法试毒，N为可试的次数+1(省一组没试也可以判断)
    有多少猪就可以在多少个维度上试毒
    猪为底数，N为指数，结果要大于桶数
*/