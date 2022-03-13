/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    const dfs = (root: TreeNode | null, target: number) => {
        if (!root) return false
        if (!(root.left || root.right) && target === root.val) return true
        return dfs(root.left, target - root.val) || dfs(root.right, target - root.val)
    }
    return dfs(root, targetSum)
}

/* 
    2022/03/13
    99 12
    二叉树
*/