/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    let res = []
    let q = []
    q.push(root)
    while (q.length) {
        let len = q.length
        let currLevel = []
        while (len--) {
            let node = q.shift()
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
            currLevel.push(node.val)
        }
        res.push(currLevel)
    }
    return res
}

/* 
    2021/12/11
    61 34
    二叉树 BFS
    二叉树的层序遍历
*/