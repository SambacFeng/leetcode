/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (!nums.length) return null
    if (nums.length === 1) return new TreeNode(nums[0])
    let mid = Math.floor(nums.length / 2)
    return new TreeNode(nums[mid], sortedArrayToBST(nums.slice(0, mid)), sortedArrayToBST(nums.slice(mid + 1)))
}

/* 
    2021/10/27
    54 11
    从中点开始，递归构建BST
    以中点为根，中点左侧作为左子树，右侧作为右子树
    因为每次都能均分左右两侧，所以二叉树是平衡的
*/