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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (!root) return new TreeNode(val)
    let node = root
    while (node) {
        if (node.val > val) {
            if (node.left) {
                node = node.left
            } else {
                node.left = new TreeNode(val)
                return root
            }
        } else {
            if (node.right) {
                node = node.right
            } else {
                node.right = new TreeNode(val)
                return root
            }
        }
    }
    return root
}

/* 
    2021/10/21
    61 79
    比较并移动，无法移动时插入
*/