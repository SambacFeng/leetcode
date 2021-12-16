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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
    if (!root) return []
    const res = []

    // 回溯
    const track = []
    const bt = root => {
        if (!root) return
        if (root.val === target && !root.left && !root.right) {
            res.push(Array.from([...track, root.val]))
            return
        }
        track.push(root.val)
        target -= root.val
        bt(root.left)
        bt(root.right)
        track.pop()
        target += root.val
    }
    bt(root)

    // DFS
    const search = (root, path, target) => {
        if (!root) return
        if (root.val === target && !root.left && !root.right) {
            res.push(Array.from([...path, root.val]))
            return
        }
        if (root.left) search(root.left, [...path, root.val], target - root.val)
        if (root.right) search(root.right, [...path, root.val], target - root.val)
    }
    search(root, [], target)

    return res
}

/* 
    2021/12/16
    DFS 92 26
    回溯 46 85
    二叉树 回溯 DFS
    注意判断是叶子节点
*/