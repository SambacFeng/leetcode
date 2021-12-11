/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
    if (!root) return []
    let res = []
    let q = []
    q.push(root)
    while (q.length) {
        let len = q.length
        while (len) {
            let node = q.shift()
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
            res.push(node.val)
            len--
        }
    }
    return res
}

/* 
    2021/12/11
    55 25
    二叉树 BFS
    二叉树的层序遍历
*/