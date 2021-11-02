/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let track = [], res = []
    nums.sort((a, b) => a - b)

    const bt = (track, used) => {
        if (track.length === nums.length) {
            res.push(track.slice())
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) { 
                continue // 去重，同一层用过的相同数字不能再用，不同层可以
            }
            if (!used[i]) {
                used[i] = true
                track.push(nums[i])
                bt(track, used)
                track.pop()
                used[i] = false
            }
        }
    }

    bt(track, [])
    return res
}

/* 
    2021/11/2
    45 63
    回溯 + 去重
*/