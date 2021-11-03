/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
    if (nums.length === 1) return 1
    let pre = 0, curr = 0, res = 1
    for (let i = 0; i < nums.length - 1; i++) {
        curr = nums[i + 1] - nums[i]
        if (curr > 0 && pre <= 0 || curr < 0 && pre >= 0) {
            res++
            pre = curr
        }
    }
    return res
}

/* 
    2021/11/3
    48 79
    贪心
    删除元素 === 只留下拐点元素
    记录每个点左右两侧正负情况，记录拐点数量
    因为两个不相同元素算2，所以res从1开始记录
*/