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
var levelOrder = function (root) {
    if (root === null) return []
    let q = []
    let res = []
    q.push(root)
    while (q.length) {
        let len = q.length
        let subRes = []
        while (len) {
            let node = q.shift()
            node.left ? q.push(node.left) : ''
            node.right ? q.push(node.right) : ''
            subRes.push(node.val)
            len--
        }
        res.push(subRes)
    }

    return res
}

/* 
    2021/9/26
    64 45
    bfs，相比标准bfs板子，一层一层进行操作来确保结果中的数组正确
*/