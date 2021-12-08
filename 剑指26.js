/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    const judge = (rootA, rootB) => {
        if (!rootB) return true
        if (!rootA) return false
        return rootA.val === rootB.val ? judge(rootA.left, rootB.left) && judge(rootA.right, rootB.right) : false
    }
    const traverse = root => {
        if (!root) return
        if (root.val === B.val) {
            if (judge(root, B)) {
                res = true
                return
            }
        }
        traverse(root.left)
        traverse(root.right)
        return
    }
    if (!B) return false
    let res = false
    traverse(A)
    return res
}

/* 
    2021/12/8
    94 29
    二叉树
    遍历，在值相等的时候比较，返回true时返回可剪枝
    B是A的子结构，A可以比B多东西
*/