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
 * @return {number}
 */
var findBottomLeftValue = function (root) {
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

    return res.pop()[0]
}

/* 
    2021/10/15
    8 20
    层序遍历改，返回最后一层的首个元素
*/