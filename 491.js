/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    let res = []
    let track = []

    const bt = (start) => {
        if (track.length >= 2) {
            res.push(Array.from(track))
        }
        let used = []
        for (let i = start; i < nums.length; i++) {
            if (nums[i] < track[track.length - 1] || used[nums[i] + 100]) continue // 去重
            used[nums[i] + 100] = true
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
    55 58
    回溯 + 去重
    非排序的去重，建立一个标记数组，同一层递归不能使用相同元素
*/