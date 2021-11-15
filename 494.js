/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    let res = 0
    
    const dfs = (start, sum) => {
        if (start >= nums.length) {
            if (sum === target) res++
            return
        }
        dfs(start + 1, sum + nums[start])
        dfs(start + 1, sum - nums[start])
    }

    dfs(0, 0)
    return res
}

/* 
    2021/11/15
    24 68
    回溯/DFS
    遍历，O(2 ^ n)
*/