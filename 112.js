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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    const dfs = (root, target) => {
        if (root === null) return false
        if (!(root.left || root.right)) {
            return root.val === target
        } else {
            return dfs(root.left, target - root.val) || dfs(root.right, target - root.val)
        }
/*         let res = []
        res.push(root.val)
        if (root.left) res.push(...dfs(root.left).map(x => x + root.val))
        if (root.right) res.push(...dfs(root.right).map(x => x + root.val))
        return res */
    }
    return dfs(root, targetSum)
}

/* 
    2021/9/28
    50 47
    dfs，随递归向下传参
*/