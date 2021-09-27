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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    const judge = (left, right) => {
        if (!(left || right)) return true
        if (!(left && right)) return false
        return left.val === right.val && judge(left.left, right.right) && judge(left.right, right.left)
    }
    return judge(root, root)
}

/* 
    2021/9/28
    92 11
    基于dfs的判断，分别传入左右对称的两个节点，判断其结构是否对称，包括其本身数值和子树
*/