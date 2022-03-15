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

function sumNumbers(root: TreeNode | null): number {
    const dfs = (root: TreeNode | null, val: number): void => {
        if (!root) return
        if (!root.left && !root.right) {
            res += val * 10 + root.val
            return
        }
        if (root.left) dfs(root.left, val * 10 + root.val)
        if (root.right) dfs(root.right, val * 10 + root.val)
    }

    let res: number = 0
    dfs(root, 0)
    return res
}

/* 
    2022/03/15
    92 27
    二叉树
*/