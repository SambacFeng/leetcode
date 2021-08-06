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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (root) {
        flatten(root.left)
        flatten(root.right)
        let leftTree = new TreeNode(0)
        let rightTree = new TreeNode(0)
        leftTree = root.left
        rightTree = root.right
        root.left = null
        root.right = leftTree
        let tmp = new TreeNode(0)
        tmp = root
        while (tmp.right) {
            tmp = tmp.right
        }
        tmp.right = rightTree
        return root
    }
    return null
};

/*  
    2021/8/6
    96% 11%
    本质上是二叉树的前序遍历

    空间复杂度O1的方法是
    var flatten = function(root) {
        let curr = root;
        while (curr !== null) {
            if (curr.left !== null) {
                const next = curr.left;
                let predecessor = next;
                while (predecessor.right !== null) {
                    predecessor = predecessor.right;
                }
                predecessor.right = curr.right;
                curr.left = null;
                curr.right = next;
            }
            curr = curr.right;
        }
    };  
    对树进行原地的更改，在遍历的过程中通过近似旋转的方式找到每个节点的前驱(左子树最右边)的节点，将右子树移动到前驱下方，再将左子树移到右子树位置

 */