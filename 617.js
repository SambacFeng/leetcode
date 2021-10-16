/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    if (!(root1 || root2)) return null
    let res = new TreeNode()
    let root = res
    const build = (root, root1, root2) => {
        if (!(root1 || root2)) return null
        if (root1 && root2) {
            root.val = root1.val + root2.val
        } else {
            root.val = root1?.val || root2?.val || 0 // || 0 十分重要，否则会在节点值为0的时候值为undefined
        }
        root.left = build(new TreeNode(), root1?.left, root2?.left) // 使用?.来减少判断
        root.right = build(new TreeNode(), root1?.right, root2?.right)
        return root
    }
    build(root, root1, root2)
    return res
}

/* 
    2021/10/17
    23 5
    二叉树的遍历与合并
    合并过程中注意判断节点不存在、节点值为0等多种情况的混合
*/