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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
    if (!root) return root
    while (root && (root.val < low || root.val > high)) {
        root.val < low ? root = root.right : root = root.left
    }
    let node = root
    while (node) {
        while (node.left && node.left.val < low) {
            node.left = node.left.right
        }
        node = node.left
    }
    node = root
    while (node) {
        while (node.right && node.right.val > high) {
            node.right = node.right.left
        }
        node = node.right
    }
    return root
}

/* 
    2021/10/25
    72 77
    修剪BST
    先将root移动到结果范围内避免重构二叉树，再调整两侧边界，将边界外部分设为null
*/