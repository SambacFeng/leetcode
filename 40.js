/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let res = []
    let track = []
    candidates.sort((a, b) => a - b)

    const bt = (target, start) => {
        if (target < 0 || start > candidates.length) return
        if (target === 0) {
            res.push(Array.from(track))
            return
        }
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue
            track.push(candidates[i])
            bt(target - candidates[i], i + 1)
            track.pop()
        }
    }

    bt(target, 0)
    return res
}

/* 
    2021/10/29
    62 44
    这次需要排序了
    排序的目的是为了去重，在连续两个数字相同时跳过，避免在同一层递归多次选择相同数字
*/