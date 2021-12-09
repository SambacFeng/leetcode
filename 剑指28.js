/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    const judge = (rootA, rootB) => {
        if (!rootA && !rootB) return true
        if (!rootA || !rootB) return false
        if (rootA.val !== rootB.val) return false
        return judge(rootA.left, rootB.right) && judge(rootA.right, rootB.left)
    }

    return judge(root, root)
}

/* 
    2021/12/9
    39 57
    二叉树
*/