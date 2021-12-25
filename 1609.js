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
var isEvenOddTree = function (root) {
    let res = true
    let level = 0
    let q = []
    if (root) q.push(root)
    while (q.length) {
        let len = q.length
        if (len > 1) {
            if (level % 2) {
                for (let i = 1; i < len; i++) {
                    if (q[i].val >= q[i - 1].val) res = false
                }
            } else {
                for (let i = 1; i < len; i++) {
                    if (q[i].val <= q[i - 1].val) res = false
                }
            }
        }
        while (len--) {
            const node = q.shift()
            if (node.val % 2 === level % 2) res = false
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
        level++
    }

    return res
}

/* 
    2021/12/25
    77 67
    二叉树 BFS
*/


class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

const node10 = new TreeNode(10)
const node4 = new TreeNode(4)
const node1 = new TreeNode(1, node10, node4)
isEvenOddTree(node1)