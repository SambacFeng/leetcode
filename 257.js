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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let track = []
    let res = []
    const bt = (root, track) => {
        if (!root) return
        track.push(root.val)
        if (!(root.left || root.right)) {
            res.push(track.join("->"))
        } else {
            if (root.left) bt(root.left, track)
            if (root.right) bt(root.right, track)
        }
        track.pop()
        return
    }

    bt(root, track)
    return res
}

/* 
    2021/10/14
    33 70
    二叉树的遍历 + 回溯
*/