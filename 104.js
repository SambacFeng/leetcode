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
var maxDepth = function(root) {
    if (root === null) return 0
    let q = []
    let res = 1
    q.push(root)
    while (q.length) {
        let len = q.length
        while (len) {
            let node = q.shift()
            node.left ? q.push(node.left) : ''
            node.right ? q.push(node.right) : ''
            len--
        }
        res++
    }
    return res
};

/* 
    2021/9/11
    78 97
    dfs遍历二叉树
    const dfs = node => {
        if (node === null) return 0
        if (node.left === null && node.right === null) return 1
        return Math.max(dfs(node.left), dfs(node.right)) + 1
    }

    return dfs(root)

    2021/9/26
    更新bfs
    75 7
*/