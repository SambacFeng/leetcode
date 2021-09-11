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
var isValidBST = function(root) {
    let min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER
    let res = true

    const leftTraverse = root => {
        if (root === null) return
        leftTraverse(root.left)
        if (root.val <= max) {
            res = false
        } else {
            max = root.val
        }
        leftTraverse(root.right)
        return
    }
    const rightTraverse = root => {
        if (root === null) return
        rightTraverse(root.right)
        if (root.val >= min) {
            res = false
        } else {
            min = root.val
        }
        rightTraverse(root.left)
        return
    }

    leftTraverse(root)
    rightTraverse(root)

    return res
};

/* 
    2021/9/11
    93 98
    尽管代码写得十分臃肿。。但是跑的却是意外的快
    分别从两个方向遍历数组，并维护遍历过的最大/最小值，边遍历边比较，遇到不合法的就把res置为false，两遍遍历完之后返回res
*/