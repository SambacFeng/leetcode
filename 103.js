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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (root === null) return []
    let q = []
    let res = []
    let level = 1
    q.push(root)
    while (q.length) {
        let len = q.length
        let subRes = []
        while (len) {
            let node = q.shift()
            level % 2 ? subRes.push(node.val) : subRes.unshift(node.val)
            node.left ? q.push(node.left) : ''
            node.right ? q.push(node.right) : ''
            len--
        }
        level++
        res.push(subRes)
    }
    return res
}

/* 
    2021/9/26
    57 13
    bfs遍历，通过层数控制每层子数组的顺序
*/