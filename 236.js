/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

let res = TreeNode()
var lowestCommonAncestor = function (root, p, q) {
    if (!root) return
    const find = (root, tar) => {
        if (!root) return false
        if (root === tar) return true
        return find(root.left, tar) || find(root.right, tar)
    }

    if (find(root, p) && find(root, q)) {
        res = root
        lowestCommonAncestor(root.left, p, q)
        lowestCommonAncestor(root.right, p, q)
    }
    return res
}

/* 
    2021/10/19
    5 16
    遍历，但有冗余
*/