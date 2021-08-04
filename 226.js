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
 * @return {TreeNode}
 */
let invertTree = function(root) {
    if (root) {
        let tmp = new TreeNode(0)
        tmp = root.left
        root.left = root.right
        root.right = tmp
        invertTree(root.left)
        invertTree(root.right)
        return root
    }
    return null
}

/* 
    2021/8/5
    85% 18%
    官方题解，避免了再定义新的变量，又省了ON的空间
    if (root === null) {
        return null;
    }
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;

    还有利用js数组解构特性的，更省代码
    if(!root)return null;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;

*/