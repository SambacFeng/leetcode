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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    let res = []
    let arr = []
    const bt = (root, target) => {
        if (root === null) return
        arr.push(root.val)
        if (!(root.left || root.right)) {
            if (root.val === target) {
                res.push([...arr])
            }
        } else {
            bt(root.left, target - root.val)
            bt(root.right, target - root.val)
        }
        arr.pop()
        return
    }
    bt(root, targetSum)
    return res
}

/* 
    2021/9/28
    42 58
    回溯
*/