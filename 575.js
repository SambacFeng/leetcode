/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    return Math.min(candyType.length / 2, new Set(candyType).size)
}

/* 
    2021/11/1
    94 56
    哈希表+数学
    总糖数只能拿一半，故结果最大是总数的一半
    如果种类数大于糖果总数量的一半，就拿一半
    如果种类数小于糖果总数的一半，有多少拿多少
*/