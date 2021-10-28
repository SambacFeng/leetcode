/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = []
    let track = []
    // candidates.sort((a, b) => a - b)

    const bt = (target, start) => {
        if (target < 0 || start > candidates.length) return
        if (target === 0) {
            res.push(Array.from(track))
            return
        }
        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > target) continue
            track.push(candidates[i])
            bt(target - candidates[i], i)
            track.pop()
        }
    }

    bt(target, 0)
    return res
}

/* 
    2021/10/28
    94 90
    通过排序将问题转换为易解的回溯问题
    排序复杂度(NlogN)小于暴力回溯复杂度(N!)，所以可以使用排序
    2021/10/29
    发现不排序好像也可以。。完全不耽误，只要进入下一层的时候不把start + 1就可以重复使用一个数字了
*/

/*     let res = new Map()
    let track = []

    const bt = target => {
        if (target < 0) return
        else if (target === 0) {
            res.set(track.sort((a, b) => a - b))
            return
        }
        candidates.forEach(e => {
            track.push(e)
            bt(target - e)
            track.pop()
        })
    }

    bt(target)
    return [...res.keys()] */