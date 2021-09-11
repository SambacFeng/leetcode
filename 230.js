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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let res = -1, num = 0
    const traverse = root => {
        if (root === null) return
        traverse(root.left)
        num++
        if (num === k) {
            res = root.val
            return
        }
        traverse(root.right)
    }
    traverse(root)
    return res
};

/* 
    2021/9/11
    89 85
    中序遍历二叉树，维护一个num值判断距离最左端的距离(即表明已经遍历到第num大的数)，num===k时记录
*/