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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let ans = []
    inOrder(root, ans)
    return ans
}

let inOrder = (root, res) => {
    inOrder(root.left, ans)
    ans.push(root.val)
    inOrder(root.right, ans)
}

/* 
    2021/8/8
    57% 99%
    好像递归是省空间些
*/