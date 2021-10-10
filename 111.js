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
var minDepth = function (root) {
    if (!root) return 0
    if (!(root.left || root.right)) return 1
    return (root.left && root.right) ? Math.min(minDepth(root.left), minDepth(root.right)) + 1 : (minDepth(root.left) || minDepth(root.right)) + 1
}

/* 
    2021/10/11
    67 70
    注意题目要求是到最近叶子节点，即仅有一个子树的情况不能算作结果为1
*/