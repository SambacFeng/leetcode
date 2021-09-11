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
var maxDepth = function(root) {
    const dfs = node => {
        if (node === null) return 0
        if (node.left === null && node.right === null) return 1
        return Math.max(dfs(node.left), dfs(node.right)) + 1
    }

    return dfs(root)
};

/* 
    2021/9/11
    78 97
    dfs遍历二叉树
*/