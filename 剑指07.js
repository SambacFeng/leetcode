/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
};

let build = (preorder, preLeft, preRight, inorder, inLeft, inRight) => {
    if (preLeft <= preRight) {
        const val = preorder[preLeft]
        let index = 0
        for (let i = inLeft; i <= inRight; i++) {
            if (inorder[i] === val) {
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
    2021/8/12
*/