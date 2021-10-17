/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
    let res = [], val = Number.MIN_SAFE_INTEGER, freq = 1, maxFreq = 1
    const treverse = root => {
        if (!root) return
        treverse(root.left)
        if (val === root.val) {
            freq++
            if (freq > maxFreq) {
                res = [val]
                maxFreq = freq
            } else if (freq === maxFreq) {
                res.push(val)
            }
        } else {
            val = root.val
            freq = 1
            if (maxFreq === 1) res.push(val)
        }
        treverse(root.right)
    }
    treverse(root)
    return res
}

/* 
    2021/10/18
    93 61
    一次遍历 + 不使额外空间
    对BST的第一个元素和众数为1的情况要加以判断
*/