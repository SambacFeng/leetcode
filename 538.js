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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let sum = 0

    const traverse = root => {
        if (root === null) return null
        traverse(root.right)
        sum += root.val
        root.val = sum
        traverse(root.left)
        return root
    }

    return traverse(root)
};

/* 
    2021/9/11
    93 70
    非常规思路，先遍历右子树，维护一个sum值，来记录遍历过的所有val值的和，赋值给当前root
*/