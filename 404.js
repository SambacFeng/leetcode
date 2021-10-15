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
var sumOfLeftLeaves = function (root) {
    if (!root) return 0
    let left = 0, right = 0
    if (root.left) {
        if (!(root.left.left || root.left.right)) {
            left = root.left.val
        } else {
            left = sumOfLeftLeaves(root.left)
        }
    }
    if (root.right) {
        right = sumOfLeftLeaves(root.right)
    }
    return left + right
}

/* 
    2021/10/15
    53 19
    二叉树遍历的求和的特殊情况
    慎用连等赋初始值
*/

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

let tr4 = new TreeNode(4, null, null)
let tr3 = new TreeNode(3, tr4, null)
let tr2 = new TreeNode(2, null, tr3)
let tr1 = new TreeNode(1, tr2, null)


console.log(sumOfLeftLeaves(tr1));