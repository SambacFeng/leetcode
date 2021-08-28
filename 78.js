/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let track = [], res = []

    const bt = (track, start) => {
        res.push(track.slice())
        for (let i = start; i < nums.length; i++) {
            track.push(nums[i])
            bt(track, i + 1)
            track.pop()
        }
    }

    bt(track, 0)

    return res
};

/* 
    2021/8/28
    95 48
    回溯
    路径：track中已有num
    选择列表：剩余num和空
    结束条件：每一种可能的结果均为可能的结束条件，故每次调用bt时都先将结果加入res中
*/