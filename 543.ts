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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let res: number = 0
    const dfs = (root: TreeNode | null): number => {
        if (!root) return 0
        let left = dfs(root.left)
        let right = dfs(root.right)
        res = Math.max(res, left + right)
        return Math.max(left, right) + 1
    }
    dfs(root)
    return res
    /*     const getHeight = (root: TreeNode | null): number => {
            if (!root) return 0
            else return Math.max(getHeight(root.left), getHeight(root.right)) + 1
        }
    
        if (!root) return 0
        const res: number = getHeight(root.left) + getHeight(root.right)
        return Math.max(res, diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right)) */
}

/* 
    2022/03/02
    10 5
    二叉树

    改用后序遍历，将计算树高和直径合并，减少重复计算 98 39
*/

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}