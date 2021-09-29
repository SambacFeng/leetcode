/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    const dfs = (p, q) => {
        if (!(p || q)) return true
        if (p && q) return p.val === q.val && dfs(p.left, q.left) && dfs(p.right, q.right)
        else return false
    }
    return dfs(p, q)
}

/* 
    2021/9/29
    12 81
    以相同顺序同时遍历两个二叉树，遇到不同时返回false
*/