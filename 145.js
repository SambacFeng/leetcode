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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let ans = []
    postOrder(root, ans)
    return ans
};

let postOrder = (root, ans) => {
    if (root) {
        postOrder(root.left, ans)
        postOrder(root.right, ans)
        ans.push(root.val)
    }
    return null
}

/* 
    2021/8/9
    79% 92%
    后序遍历的递归解法
*/