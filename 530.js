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
 * @return {number}
 */
var getMinimumDifference = function (root) {
    let res = Number.MAX_SAFE_INTEGER
    let pre = Number.MIN_SAFE_INTEGER
    let treverse = (root) => {
        if (!root) return
        treverse(root.left)
        res = Math.min(res, root.val - pre)
        pre = root.val
        treverse(root.right)
    }
    treverse(root)
    return res
}

/* 
    2021/10/17
    35 48
    重点在使用中序遍历，这样在判断时得到的值是有序的，充分利用了BST的性质
*/