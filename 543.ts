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
    const getHeight = (root: TreeNode | null): number => {
        if (!root) return 0
        else return Math.max(getHeight(root.left), getHeight(root.right)) + 1
    }

    if (!root) return 0
    const res: number = getHeight(root.left) + getHeight(root.right)
    return Math.max(res, diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right))
}

/* 
    2022/03/02
    10 5
    二叉树
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