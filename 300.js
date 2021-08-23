/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    let l = nums.length
    let res = new Array(l).fill(1)
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                res[i] = Math.max(res[i], res[j] + 1)
            }
        }
    }

    return Math.max(...res)
};

/* 
    2021/8/23
    60 20
    遍历并dp，找到目标数前方最长且末尾比目标数小的结果+1作为自身结果
    如果自身是最小值则设置为1
*/