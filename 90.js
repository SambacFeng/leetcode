/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let res = []
    let track = []
    nums.sort((a, b) => a - b)

    const bt = start => {
        res.push(Array.from(track))
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue // 去重
            track.push(nums[i])
            bt(i + 1)
            track.pop()
        }
    }

    bt(0)
    return res
}

/* 
    2021/11/2
    71 98
    回溯 + 合理去重
*/