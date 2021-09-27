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
var rightSideView = function (root) {
    if (root === null) return []
    let q = []
    let res = []
    q.push(root)
    while (q.length) {
        let len = q.length
        while (len) {
            let node = q.shift()
            if (len === 1) {
                res.push(node.val)
            }
            node.left ? q.push(node.left) : ''
            node.right ? q.push(node.right) : ''
            len--
        }
    }
    return res
}

/* 
    2021/9/27
    91 99
    bfs逐层遍历，每层最后一个加入res数组
*/