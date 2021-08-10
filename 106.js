/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
    return build(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1)
};

let build = (inorder, inLeft, inRight, postorder, postLeft, postRight) => {
    if (inLeft <= inRight) {
        let val = postorder[postRight]
        let index = 0
        for (let i = inLeft; i <= inRight; i++) {
            if (inorder[i] === val) {
                index = i
                break
            }
        }
        let root = new TreeNode(val)
        let leftSize = index - inLeft
        root.left = build(inorder, inLeft, index - 1, postorder, postLeft, postLeft + leftSize - 1)
        root.right = build(inorder, index + 1, inRight, postorder, postLeft + leftSize, postRight - 1)
        return root
    }
    return null
}

/* 
    2021/8/11
    90% 98%
    思路同105
*/