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
    2021/9/11更新
    95 10
    贪心+二分
    维护一个最长递增子序列长度len和子序列数组d
    从前往后，对于每一个遍历到的值，比较其与d[len]的大小，并将其追加在d后/用其更新d中的值
    其中二分查找可以更快的确定更新时要替换的位置，res记录比nums[i]小的最大值，将nums[i]放在d[res+1]处
    let len = 1, n = nums.length
    let d = Array(n + 1).fill(0)
    d[len] = nums[0]
    for (let i = 1; i < n; i++) {
        if (nums[i] > d[len]) {
            d[++len] = nums[i]
        } else {
            let l = 1, r = len, res = 0
            while (l <= r) {
                let mid = l + Math.floor((r - l) / 2)
                if (d[mid] < nums[i]) {
                    res = mid
                    l = mid + 1
                } else {
                    r = mid - 1
                }
            }
            d[res + 1] = nums[i]
        }
    }
    return len
*/