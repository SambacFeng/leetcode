/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
    if (!root) return root
    ;[root.left, root.right] = [root.right, root.left]
    mirrorTree(root.left)
    mirrorTree(root.right)
    
    return root
}

/* 
    2021/12/7
    92 83
    二叉树 递归
*/