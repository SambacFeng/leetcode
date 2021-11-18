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
var findTilt = function (root) {
    const getSum = root => {
        if (!root) return 0
        return root.val + getSum(root.left) + getSum(root.right)
    }
    const sumTilt = root => {
        if (!root) return 0
        return Math.abs(getSum(root.left) - getSum(root.right)) + sumTilt(root.left) + sumTilt(root.right)
    }
    return sumTilt(root)
}

/* 
    2021/11/18
    7 38
    二叉树 模拟
    也可以用一个外部变量tilt存值，减少函数定义和调用
*/