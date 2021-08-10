/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
};

let build = (preorder, preLeft, preRight, inorder, inLeft, inRight) => {
    if (preLeft <= preRight) {
        let val = preorder[preLeft]
        let index = 0
        for (let i = inLeft; i <= inRight; i++) {
            if (val === inorder[i]) {
                index = i
                break
            }
        }
        let root = new TreeNode(val)
        let leftSize = index - inLeft
        root.left = build(preorder, preLeft + 1, preLeft + leftSize, inorder, inLeft, index - 1)
        root.right = build(preorder, preLeft + leftSize + 1, preRight, inorder, index + 1, inRight)
        return root
    }
    return null
}

/* 
    2021/8/10
    98% 98%
    重点在于确定参数范围
*/