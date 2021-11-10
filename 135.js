/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let res = 0
    let candies = new Array(ratings.length).fill(1)
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1
        }
    }
    for (let i = ratings.length - 2; i > -1; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1)
        }
    }
    candies.forEach(e => {
        res += e
    })
    return res
}

/* 
    2021/11/10
    35 56
    贪心
    正反遍历，局部最优解累计得到全局最优解
    对于需要和左右两侧元素比较得到结果的都可以考虑正反遍历
*/