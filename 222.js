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
var countNodes = function (root) {
    if (!root) return 0
    return countNodes(root.left) + countNodes(root.right) + 1
}

/* 
    2021/10/14
    89 84
    递归求节点个数
    也可利用二叉树的性质和满二叉树的性质，完全二叉树的子树要么是满二叉树要么是完全二叉树，满二叉树可直接用2 ^ depth - 1求节点数量，只需遍历求深度即可
*/