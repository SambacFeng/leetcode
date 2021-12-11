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
    let level = 1
    while (q.length) {
        let len = q.length
        let currLevel = []
        while (len--) {
            let node = q.shift()
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
            level % 2 ? currLevel.push(node.val) : currLevel.unshift(node.val)
        }
        level++
        res.push(currLevel)
    }
    return res
}

/* 
    2021/12/11
    92 47
    二叉树 BFS
    二叉树的层序遍历，通过维护level的值判断遍历方向
*/