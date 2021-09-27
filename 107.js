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
var levelOrderBottom = function (root) {
    if (root === null) return []
    let q = []
    let res = []
    q.push(root)
    while (q.length) {
        let len = q.length
        let subRes = []
        while (len) {
            let node = q.shift()
            subRes.push(node.val)
            node.left ? q.push(node.left) : ''
            node.right ? q.push(node.right) : ''
            len--
        }
        res.unshift(subRes)
    }
    return res
}

/* 
    2021/9/27
    30 6
    正向层序遍历得shift改成unshift...
*/