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
 var sumNumbers = function (root) {
    let str = ''
    let res = 0

    const dfs = root => {
        if (root === null) return
        if (root.left === null && root.right === null) {
            str += root.val
            res += Number(str)
            str = str.slice(0, -1)
            return
        }
        str += root.val
        root.left ? dfs(root.left) : ''
        root.right ? dfs(root.right) : ''
/*         dfs(root.left)
        dfs(root.right) */
        str = str.slice(0, -1)
        return
    }

    dfs(root)

    return res
};

/* 
    2021/9/14
    85 97
    如果2627两行换成2829的话就是69 6，差距这么大的吗，我不理解
    我用了字符串进行操作，也可以多给dfs传一个数字作为参数进行通信，能减小操作量
*/