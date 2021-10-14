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
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) return true
    return Math.abs(getDepth(root.left) - getDepth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}

const getDepth = root => {
    if (!root) return 0
    return Math.max(getDepth(root.left), getDepth(root.right)) + 1
}

/* 
    2021/10/14
    29 70
    使用辅助函数判断二叉树高度，递归调用返回结果
*/